
import { useFormikContext } from "formik";
import Input from "../inputs/Input";
import ContainerWrapper from "./ContainerWrapper";
import { initialValues } from "../../App";
import Big from 'big.js';
import { IconPlant } from "@tabler/icons-react";

const AliceContainer = () => {
  const { values, setFieldValue } = useFormikContext<typeof initialValues>();
  const color = 'rose'

  const onAlicePrivChange = (e: any) => {
    const alicePriv = parseFloat(e.target.value)
    setFieldValue('alice-priv', alicePriv)
    if (alicePriv) {
      const aliceToBob = Big(values['public-g']).pow(alicePriv).mod(values['public-n']).c.reduce((sum: string, num: number) => {
        return sum + num
      }, '')
      setFieldValue('alice-to-bob', parseFloat(aliceToBob))
      if (aliceToBob) {
        console.log('alice-to-bob', aliceToBob)
      }
    }
  }


  return (
    <ContainerWrapper color={'none'}>
      <h3 className="text-3xl text-center">Alice</h3>
      <ContainerWrapper color={color} >
      <IconPlant className="text-rose-300" size={75} />
      </ContainerWrapper>
      <ContainerWrapper color={color}>
        <Input name="alice-priv" label='Alice Priv:' type="number" onChange={onAlicePrivChange} colorAccent={color} />
      </ContainerWrapper>
      <ContainerWrapper color={color}>
        <Input name="bob-to-alice" label='From Bob:' type="number" isDisabled colorAccent={color} />
      </ContainerWrapper>
    </ContainerWrapper>
  );
}

export default AliceContainer;