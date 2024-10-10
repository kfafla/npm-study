import { reactive , ref , computed } from 'vue';
interface FieldRules {  
    required?: boolean;  
    minLength?: number;  
    maxLength?: number;  
    // 可以添加更多自定义规则  
  }  
    
  interface FieldState {  
    value: string;  
    error: string | null;  
    touched: boolean;  
  }  
    
  interface UseFormValidationOptions {  
    initialValues: Record<string, string>;  
    rules: Record<string, FieldRules>;  
  }  

export function useFormValidation({ initialValues, rules }: UseFormValidationOptions) {  
    const fields = reactive<Record<string, FieldState>>(  
      Object.keys(initialValues).reduce((acc, key) => {  
        acc[key] = {  
          value: initialValues[key],  
          error: null,  
          touched: false,  
        };  
        return acc;  
      }, {} as Record<string, FieldState>)  
    );  
    
    const validateField = (fieldName: string) => {  
      const field = fields[fieldName];  
      let error = null;  
    
      const { required, minLength, maxLength } = rules[fieldName] || {};  
    
      if (required && !field.value.trim()) {  
        error = 'This field is required.';  
      } else if (minLength && field.value.length < minLength) {  
        error = `This field must be at least ${minLength} characters long.`;  
      } else if (maxLength && field.value.length > maxLength) {  
        error = `This field must be no longer than ${maxLength} characters.`;  
      }  
    
      field.error = error;  
      field.touched = true;  
    };  
    const validateForm = () => {  
        let isValid = true;  
      for (const fieldName in fields) {  
        validateField(fieldName);  
        if (fields[fieldName].error) {  
          isValid = false;  
        }  
      }  
    
      return isValid;  
    };  
    return {  
      fields,  
      validateField,  
      validateForm,  
    };  
  }  