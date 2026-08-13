import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import Stack from '../stack';



const InputField = ({ placeholder, value, onChange }: InputFieldProps) => {
  return (
    <Stack>
        <Label>{label}</Label>
        <InputText placeholder={placeholder} value={value} onChange={onChange} />
    </Stack>
  )
}

export default InputField