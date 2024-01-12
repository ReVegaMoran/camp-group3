import { textBoxElements } from "./textBox.elements";
import { textBoxData } from "./textBox.data";

export class textBoxMethods {
    static insertFullName() {
        textBoxElements.textBoxes.fullName.type(textBoxData.validCredentials.username);
    }

    static insertUserEmail() {
        textBoxElements.textBoxes.userEmail.type(textBoxData.validCredentials.email);
    }

    static insertCurrentAddress() {
        textBoxElements.textBoxes.currentAddress.type(textBoxData.validCredentials.currentAddress);
    }

    static insertPermanentAddress() {
        textBoxElements.textBoxes.permanentAddress.type(textBoxData.validCredentials.permanentAddress);
    }

    static clicOnLoginButton() {
        textBoxElements.buttons.submit.click();
    }

    static testBox() {
        this.insertFullName();
        this.insertUserEmail();
        this.insertCurrentAddress();
        this.insertPermanentAddress();
        this.clicOnLoginButton();
    }
}