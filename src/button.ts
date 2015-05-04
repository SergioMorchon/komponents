/// <reference path="utils" />

module Komponents {
	
	export class Button extends Base {
		
		type: KnockoutObservable<Button.Type>;
		size: KnockoutObservable<Button.Size>;
		
		block: KnockoutObservable<boolean>;
		
		css() {
			let result = ["btn"];
			
			//#region type
			let type: string;
			switch (this.type()) {
				case Button.Type.Primary:
					type = "primary";
					break;
				case Button.Type.Success:
					type = "success";
					break;
				case Button.Type.Info:
					type = "info";
					break;
				case Button.Type.Warning:
					type = "warning";
					break;
				case Button.Type.Danger:
					type = "danger";
					break;
				case Button.Type.Link:
					type = "link";
					break;
				default:
					type = "default";
			}
			result.push(`btn-${type}`);
			//#endregion
			//#region size
			
			//#endregion size
			//#region block
			//#endregion
			
			return result.join(" ");
		}
		
		constructor(params: any, info: KnockoutComponentTypes.ComponentInfo) {
			super(params, info);
			let parameters = Button.parameters(info);
			if (Utils.isDefined(parameters, "type")) {
				this.type = <KnockoutObservable<Button.Type>>(
					ko.isObservable(parameters["type"])?
						parameters["type"]
						:
						ko.observable(
							Utils.toEnum<Button.Type>(parameters["type"], Button.Type)
						)
					);
			} else {
				this.type = ko.observable(Button.Type.Default);
			}
			if (Utils.isDefined(parameters, "size")) {
				this.size = <KnockoutObservable<Button.Size>>(
					ko.isObservable(parameters["size"])?
						parameters["size"]
						:
						ko.observable(
							Utils.toEnum<Button.Size>(parameters["size"], Button.Size)
						)
					);
			} else {
				this.size = ko.observable(Button.Size.Default);
			}
			if (Utils.isDefined(parameters, "block")) {
				this.block = <KnockoutObservable<boolean>>(
					ko.isObservable(parameters["block"])?
						parameters["block"]
						:
						ko.observable(parameters["block"])
					);
			} else {
				this.block = ko.observable(false);
			}
		}
	}
	
	export module Button {
		export enum Type {
			Default,
			Primary,
			Success,
			Info,
			Warning,
			Danger,
			Link
		}
		
		export enum Size {
			Default,
			ExtraSmall,
			Small,
			Large
		}
	}
}