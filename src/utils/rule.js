const log = console.log;
export default {
    chk(data) {
        var ruleValidate = {};
        for (let i in data) {
            let required = data[i].required || true;
            let title = data[i].title || '';
            let message = data[i].message || '';
            let trigger = data[i].trigger || 'blur';
            let type = data[i].type || '';
            let min = data[i].min || '';
            let max = data[i].max || '';

            ruleValidate[i] = { required: required, message: `${title}不能为空`, trigger: trigger }, { type: type, message: `${message}格式不正确`, trigger: trigger };
        }
        return ruleValidate;
    }
}