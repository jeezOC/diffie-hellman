import { useFormikContext } from "formik";
import Input from "../inputs/Input";
import ContainerWrapper from "./ContainerWrapper";
import { initialValues } from "../../App";
import { useEffect } from "react";
import Big from 'big.js';
import {  IconShieldLock } from "@tabler/icons-react";

const PublicContainer = () => {

  const { values, setFieldValue } = useFormikContext<typeof initialValues>();
  const color = 'green'

  const onKeysChange = (atb: number, bta: number) => {
    console.log('onKeysChange', values)
    
    const { 'public-g': g, 'public-n': n } = values;
    if (g && n) {
      
      const fromAlice = Big(atb).pow(values['bob-priv']).mod(n).c.reduce((sum: string, num: number) => {
        return sum + num
      }, '')
      const formBob = Big(bta).pow(values['alice-priv']).mod(n).c.reduce((sum: string, num: number) => {
        return sum + num
      }, '')

      setFieldValue('public-a-b', fromAlice)
      setFieldValue('public-b-a', formBob)
    }
  }

  useEffect(() => {
    onKeysChange(values['alice-to-bob'], values['bob-to-alice'])
  }, [values['bob-to-alice'], values['alice-to-bob'], values['public-g'], values['public-n']])


  return (
    <ContainerWrapper color={'none'}>
      <h3 className="text-3xl text-center">Public</h3>
      <ContainerWrapper color={color}>
        <Input name="public-n" label='Module:' type="number" colorAccent={color} />
        <Input name="public-g" label='Generator:' type="number" colorAccent={color} />
      </ContainerWrapper>
      <ContainerWrapper color={color} >
      <IconShieldLock className="text-green-300" size={100} />
      </ContainerWrapper>
      <ContainerWrapper color={color}>
        <Input name="public-a-b" label='Alice + Bob = ' type="number" isDisabled colorAccent={color} />
        <Input name="public-b-a" label='Bob + Alice = ' type="number" isDisabled colorAccent={color} />
      </ContainerWrapper>
    </ContainerWrapper>
  );
}

export default PublicContainer;