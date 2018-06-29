const categorizationTemplate = `
<style>
.jsf-categorization {
  display: flex;
  flex-direction: row;
  border: 1px solid;
}
.jsf-categorization > .jsf-categorization-master {
  flex:1;
  border-right: 1px solid;
  padding: 1em;
  margin: 0;
}
.jsf-categorization > .jsf-categorization-detail {
  flex:3;
  padding: 1em;
  margin: 0;
}
.jsf-categorization > .jsf-categorization-master ul {
  list-style-type: none;
  padding: 0;
}
.jsf-categorization > .jsf-categorization-master ul li:hover {
  cursor: pointer;
  font-weight: bold;
}
.jsf-categorization > .jsf-categorization-master ul li .selected {
  font-weight: bold;
}
</style>
<script type="text/ng-template" id="category.html">
  <ul>
      <li ng-repeat="category in categorization.elements" ng-init="expanded=false"
        ng-class="{
          'closed': !expanded && category.type==='Categorization',
          'expanded': expanded && category.type==='Categorization',
          'none': category.type==='Category'
        }">
          <div class="jsf-category-entry">
            <span class="jsf-category-label"
                  ng-class="{'selected': category===vm.selectedCategory}"
                  ng-click="vm.changeSelectedCategory(category,this)">
                  {{category.label}}
            </span>
          </div>
          <div class="jsf-category-subcategories" ng-init="categorization=category"
           ng-if="category.type==='Categorization'" ng-show="expanded" ng-include="'category.html'">
          </div>
      </li>
  </ul>
</script>
<jsonforms-layout>
    <div class="jsf-categorization">
        <div class="jsf-categorization-master" ng-include="'category.html'"
          ng-init="categorization=vm.uiSchema">
        </div>
        <div class="jsf-categorization-detail">
            <jsonforms-inner ng-if="vm.selectedCategory"
                             ng-repeat="child in vm.selectedCategory.elements"
                             uischema="child">
             </jsonforms-inner>
        </div>
    </div>
</jsonforms-layout>`;

angular
    .module('MiHexample')
    .run(['$templateCache', $templateCache => {
        $templateCache.put('categorization.html', categorizationTemplate);
    }])
    .name;
