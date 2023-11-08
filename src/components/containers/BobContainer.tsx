import { useFormikContext } from "formik";
import { initialValues } from "../../App";
import Input from "../inputs/Input";
import ContainerWrapper from "./ContainerWrapper";
import Big from 'big.js';
import { IconRocket } from "@tabler/icons-react";

const BobContainer = () => {
  const { values, setFieldValue } = useFormikContext<typeof initialValues>();
  const color = 'blue'

  const onBobPrivChange = (e: any) => {
    const bobPriv = parseFloat(e.target.value)
    setFieldValue('bob-priv', bobPriv)
    if (bobPriv) {
      const bobToAlice = Big(values['public-g']).pow(bobPriv).mod(values['public-n']).c.reduce((sum: string, num: number) => {
        return sum + num
      }, '')
      setFieldValue('bob-to-alice', parseFloat(bobToAlice))
    }
  }

  return (
    <ContainerWrapper color={'none'}>
      <h3 className="text-3xl text-center">Bob</h3>
      <ContainerWrapper color={color} >
      <IconRocket className="text-blue-300" size={75} />
      </ContainerWrapper>
      <ContainerWrapper color={color}>
        <Input name="bob-priv" label='Bob Private:' type="number" onChange={onBobPrivChange} colorAccent={color} />
      </ContainerWrapper>
      <ContainerWrapper color={color}>
        <Input name="alice-to-bob" label='From Alice:' type="number" isDisabled colorAccent={color}  />
      </ContainerWrapper>
    </ContainerWrapper>
  );
}

export default BobContainer;