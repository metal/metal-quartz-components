YUI.add("aui-form-builder-field-select",function(e,t){var n=e.Lang,r=e.getClassName,i=r("form","control"),s=r("form-builder-field"),o=r("form-builder-field","node"),u='<select id="{id}" class="'+[o,i].join(" ")+'" name="{name}" value="{value}"></select>',a=e.Component.create({NAME:"form-builder-select-field",ATTRS:{multiple:{setter:e.DataType.Boolean.parse,value:!1},template:{valueFn:function(){return u}}},UI_ATTRS:e.FormBuilderField.UI_ATTRS.concat(["multiple","predefinedValue"]),CSS_PREFIX:s,EXTENDS:e.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var e=this;return n.sub(e.get("template"),{id:e.get("id"),label:e.get("label"),name:e.get("name"),value:e.get("predefinedValue")})},getPropertyModel:function(){var t=this,n=t.getStrings(),r=e.FormBuilderSelectField.superclass.getPropertyModel.apply(t,arguments);return r.push({attributeName:"multiple",editor:new e.RadioCellEditor({options:{"true":n.yes,"false":n.no}}),formatter:e.bind(t._booleanFormatter,t),name:n.multiple}),r},_uiSetMultiple:function(e){var t=this,n=t.get("templateNode");e?n.setAttribute("multiple","multiple"):n.removeAttribute("multiple"),t.predefinedValueEditor.set("multiple",e)}}});e.FormBuilderSelectField=a,e.FormBuilder.types.select=e.FormBuilderSelectField},"2.5.0",{requires:["aui-form-builder-field-base"]});
