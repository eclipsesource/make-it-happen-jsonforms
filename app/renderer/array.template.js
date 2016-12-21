const arrayTemplate =  `
<jsonforms-layout>
  <fieldset ng-disabled="vm.uiSchema.readOnly">
    <legend>{{vm.label}}</legend>
    <div ng-repeat='data in vm.resolvedData[vm.fragment]'>
      <div ng-repeat='prop in vm.properties'>
        <strong>{{prop | capitalize}}:</strong> {{data[prop]}}
      </div>
      <hr ng-show="!$last">
    </div>
    <div ng-if="vm.isEmpty" class="readonly-array-empty">{{vm.emptyMsg}}</div>
    <hr style="border: 1px solid;">
    <h1>New Entry:</h1>
    <div>
        <jsonforms schema="vm.arraySchema" data="vm.submitElement"></jsonforms>
    </div>
    <input class="btn btn-primary"
           ng-show="vm.supportsSubmit"
           type="button"
           value="Add {{vm.buttonText}}"
           ng-click="vm.submitCallback()"
           ng-model="vm.submitElement">
    </input>
  </fieldset>
</jsonforms-layout>`;

angular
    .module('jsonforms-bootstrap.renderers.controls.array', [])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('read-only-array.html', arrayTemplate);
    }]).name;
