// HACK for ES5 Custom Elements see https://github.com/w3c/webcomponents/issues/587#issuecomment-254017839
function MakeItHappen() {
  return Reflect.construct(HTMLElement, [], MakeItHappen);
}
Object.setPrototypeOf(MakeItHappen.prototype, HTMLElement.prototype);
Object.setPrototypeOf(MakeItHappen, HTMLElement);

MakeItHappen.prototype.connectedCallback = function(){
  var jsonForms = document.createElement('json-forms');
  jsonForms.data = Task;
  if(window.Schema)
    jsonForms.dataSchema = Schema;
  if(window.UISchema)
    jsonForms.uiSchema = UISchema;
  this.appendChild(jsonForms);
};
MakeItHappen.prototype.dispose = function(){};

customElements.define('make-it-happen', MakeItHappen);
