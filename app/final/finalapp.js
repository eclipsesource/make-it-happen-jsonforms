var Task = undefined;
// HACK for ES5 Custom Elements see https://github.com/w3c/webcomponents/issues/587#issuecomment-254017839
function FinalApp() {
  return Reflect.construct(HTMLElement, [], FinalApp);
}
Object.setPrototypeOf(FinalApp.prototype, HTMLElement.prototype);
Object.setPrototypeOf(FinalApp, HTMLElement);

FinalApp.prototype.connectedCallback = function(){
  this.innerHTML=`
  <div class="row">
      <div class="col-xs-6">
          <div class="panel panel-primary">
              <div class="panel-heading clearfix">
                  <button role="button" class="btn btn-default pull-right" aria-label="Left Align" id="addNewBtn">
                      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </button>
                  <h3 class="panel-title" style="line-height:34px;">
                      <strong>Task List</strong>
                  </h3>
              </div>
              <div class="panel-body" style="line-height: 2.0">
                  <small class="muted">Click on a task item to view its details.</small>
                  <ul class="nav nav-pills nav-stacked" id="dataList">

                  </ul>
              </div>
          </div>
      </div>
      <div class="col-xs-6">
          <div class="panel panel-primary" id="detailPanel">
              <div class="panel-heading clearfix">
                  <div class="btn-group pull-right" role="group">
                      <button type="button" class="btn btn-default" aria-label="Save" id="saveBtn">
                          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          <span>Submit</span>
                      </button>
                  </div>
                  <h3 class="panel-title" style="line-height:34px;">
                      <strong>Task Detail</strong>
                  </h3>
              </div>
              <div class="panel-body jsf" style="line-height: 2.0" id="renderDetail">
              </div>
          </div>
          <div class="panel panel-primary" id="detailPanelLoading">
              <div class="panel-heading clearfix">
                  <h3 class="panel-title" style="line-height:34px;">
                      <strong>Loading data ...</strong>
                  </h3>
              </div>
          </div>
      </div>
  </div>
  `;
  var btnAddNew = document.getElementById('addNewBtn');
  btnAddNew.onclick = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       updateDataList();
    };
    xhttp.open("POST", "http://localhost:3004/tasks/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({name:"New Task"}));
  }
  var btnSave = document.getElementById('saveBtn');
  btnSave.onclick = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       updateDataList();
    };
    xhttp.open("PUT", "http://localhost:3004/tasks/"+Task.id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(Task));
  }
  var detailPanel = document.getElementById('detailPanel');
  detailPanel.hidden = true;
  var detailPanelLoading = document.getElementById('detailPanelLoading');
  detailPanelLoading.hidden = true;
  var renderDetail = document.getElementById('renderDetail');
  var dataList = document.getElementById('dataList');
  var fillLi = function(li,i, data){
    li.className = 'clearfix';
    var a = document.createElement('a');
    a.textContent=data.name;
    a.onclick = function(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var realData = JSON.parse(this.responseText);
          window.Task = realData;
          detailPanel.hidden = false;
          detailPanelLoading.hidden = true;
          if (renderDetail.firstChild) renderDetail.removeChild(renderDetail.firstChild);
          renderDetail.appendChild(document.createElement('make-it-happen'));
        }
      };
      xhttp.open("GET", "http://localhost:3004/tasks/"+data.id, true);
      xhttp.send();
      detailPanelLoading.hidden = false;
    };
    var div = document.createElement('div');
    div.className = 'btn-group btn-group-sm pull-right';
    var button = document.createElement('button');
    button.className = 'btn btn-default';
    button.onclick = function(event){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
         updateDataList();
         if(data === Task) {
           window.Task = undefined;
           detailPanel.hidden = true;
         }
      };
      xhttp.open("DELETE", "http://localhost:3004/tasks/"+data.id, true);
      xhttp.send();
      event.stopPropagation()
    };
    var span = document.createElement('span');
    span.className = 'glyphicon glyphicon-trash';
    button.appendChild(span);
    div.appendChild(button);
    a.appendChild(div);
    li.appendChild(a);
  };
  var updateDataList = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        while (dataList.firstChild) dataList.removeChild(dataList.firstChild);
        for(var i=0;i<data.length;i++){
          var li = document.createElement('li');
          fillLi(li,i, data[i]);
          dataList.appendChild(li);
        }
      }
    };
    xhttp.open("GET", "http://localhost:3004/tasks/", true);
    xhttp.send();
  }
  updateDataList();
};
FinalApp.prototype.dispose = function(){};

customElements.define('final-app', FinalApp);
