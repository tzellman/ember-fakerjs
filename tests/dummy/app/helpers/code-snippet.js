import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function codeSnippet(params) {
    return htmlSafe(`{{${params.join(' ')}}`);
});
