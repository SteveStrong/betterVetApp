
export class TransfromRules {

    rule1(text: string) {
        let result = text.replace(/The Board/i, "<b  class='high' >The Board</b>");
        return result;
    }

    
    rule2(text: string) {
        let result = text.replace(/probative/i, "<span class='high'>probative</span>");
        return result;
    }

    rule3(text: string) {
        let result = text.replace(/PTSD/i, "<span class='high'>PTSD</span>");

        return result;
    }

    pipeline1(text: string) {
        let result = text;
        result = this.rule1(result);
        result = this.rule2(result);
        result = this.rule3(result);
        return result;
    }
}