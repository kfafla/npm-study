import { ref } from "vue";

// 定义验证规则的类型  
type ValidationRule = (value: any) => false | string;  
interface ValidationRules {  
    [fieldName: string]: ValidationRule[];  
} 

//  函数接收一个参数 validationRules，该参数是一个对象，包含每个字段的验证规则。
export function useForm ( validationRules: ValidationRules ){

    // fields: 存储每个表单字段当前的值。
    // errors: 存储每个字段的错误信息。
    // isValid: 表示整个表单是否有效，初始为 true。
    const fields = ref<Record<string,string>>({});
    const errors = ref<Record<string,string>>({});
    const isValid = ref(true);

    // 遍历 validationRules 中的字段名，初始化每个字段的值（为空字符串）和错误信息（也为空字符串）。确保在调用验证时每个字段都有一个默认状态。
    for (const fieldName of Object.keys(validationRules)) {  
        fields.value[fieldName] = '';
        errors.value[fieldName] = '';
    }

    // validateField 函数负责验证特定字段。
    // 获取当前字段的值，并存储相关规则。
    const validateField = (fieldName: string) => {  
        const value = fields.value[fieldName];  
        const rules = validationRules[fieldName];  
        errors.value[fieldName] = '';

        // 遍历与字段相关的所有验证规则。执行规则并检查是否返回错误信息；如有错误，更新错误状态并停止进一步检查（使用 break）。
        for (const rule of rules) {  
            const errorMessage = rule(value);  
            if (errorMessage) {  
              errors.value[fieldName] = errorMessage;  
              break; // 一旦找到错误，结束规则验证  
            }  
        }
    };

    // validateForm 函数验证所有字段。
    // 重置 isValid 为 true，然后对每个字段调用 validateField。
    // 如果某个字段有错误，更新 isValid 为 false，最终返回表单验证的整体结果。
    const validateForm = () => {  
        isValid.value = true;  
        for (const fieldName of Object.keys(validationRules)) {  
            validateField(fieldName);  
            if (errors.value[fieldName]) {  
            isValid.value = false;  
            }  
        }  
        return isValid.value;  
    };

    // updateField 函数用于更新特定字段的值，并在每次更新时立即验证那个字段。这使得用户的输入始终保持实时反馈。
    const updateField = (fieldName: string, value: string) => {  
        fields.value[fieldName] = value;  
        validateField(fieldName); // 每次更新时重新验证该字段  
    };

    return {  
        fields,  
        errors,  
        isValid,  
        validateForm,  
        updateField,  
    }; 

}