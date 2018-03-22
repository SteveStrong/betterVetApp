
export class TransfromRules {

    rule1(text: string) {
        let result = text.replace(/The Board/i, '<b>The Board</b>');
        return result;
    }

    
    rule2(text: string) {
        let result = text.replace('/probative/i', "<span class='high'>probative</span>");
        return result;
    }

    rule3(text: string) {
        let result = text;
        return result;
    }

    pipeline1(text: string) {
        let result = this.rule1(text);
        result = this.rule2(result);
        result = this.rule3(result);
        return result;
    }
}