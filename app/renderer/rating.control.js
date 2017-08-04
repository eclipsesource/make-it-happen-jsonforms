// HACK for ES5 Custom Elements see https://github.com/w3c/webcomponents/issues/587#issuecomment-254017839
function RatingControl() {
  return Reflect.construct(JSONForms.Renderer, [], RatingControl);
}
Object.setPrototypeOf(RatingControl.prototype, JSONForms.Renderer.prototype);
Object.setPrototypeOf(RatingControl, JSONForms.Renderer);
RatingControl.prototype.dispose=function(){};
RatingControl.prototype.render = function(){
  var controlElement = this.uischema;
  var that = this;
  var setCurrent = function(ratingControl) {
    const currentValue = ratingControl.dataService.getValue(ratingControl.uischema);
    for (var i = 1; i <= 5; i++) {
      let star = '\u2605';
      if (i > currentValue || currentValue === undefined) {
        star = '\u2606';
      }
      ratingControl.children.item(i - 1).innerText = star;
    }
  };
  var updateSpans = function(span) {
    span.innerText = '\u2605';
    let prevStar = span.previousElementSibling;
    while (prevStar !== null) {
      prevStar.innerText = '\u2605';
      prevStar = prevStar.previousElementSibling;
    }
    let nextStar = span.nextElementSibling;
    while (nextStar !== null) {
      nextStar.innerText = '\u2606';
      nextStar = nextStar.nextElementSibling;
    }
  };
  var createSpan = function(span, i){
    span.innerText = '\u2606';
    span.onclick = function() {
      that.dataService.notifyChange(controlElement, i);
      updateSpans(span);
    };
    span.onmouseover = function() {
      updateSpans(span);
    };
    span.style.cursor = 'default';
  };

  for (var i = 1; i <= 5; i++) {
    var span = document.createElement('span');
    createSpan(span,i);
    this.appendChild(span);
  }
  this.className = 'rating';
  this.onmouseout = function() {
    setCurrent(this);
  };
  setCurrent(this);
  return this;
}
customElements.define('rating-control', RatingControl);
var tester = JSONForms.rankWith(5, JSONForms.and(JSONForms.uiTypeIs('Control'),
    JSONForms.schemaTypeIs('integer'),JSONForms.refEndIs('rating')));
JSONForms.JsonFormsHolder.rendererService.registerRenderer(tester, 'rating-control');
