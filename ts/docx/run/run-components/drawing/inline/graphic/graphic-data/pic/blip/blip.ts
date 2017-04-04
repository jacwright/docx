import { IData } from "../../../../../../../../../media/data";
import { XmlAttributeComponent, XmlComponent } from "../../../../../../../../xml-components";

interface IBlipProperties {
    embed: string;
}

class BlipAttributes extends XmlAttributeComponent<IBlipProperties> {
    protected xmlKeys = {
        embed: "r:embed",
    };
}

export class Blip extends XmlComponent {

    constructor(imageData: IData) {
        super("a:blip");
        this.root.push(new BlipAttributes({
            embed: `rId${imageData.referenceId}`,
        }));
    }
}