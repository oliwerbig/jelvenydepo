import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";

const OrderForm = (props: React.PropsWithChildren<any>) => {
  return (
    <form
      action="#"
      className={`space-y-8 ${props.className ?? ""}`}
      {...props}
    >
      <div>
        <Label htmlFor="email" value="Email címed" />
        <TextInput
          type="email"
          id="email"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone" value="Telefonszámod" />
        <TextInput
          type="text"
          id="phone"
          placeholder="+36 20 0680 371"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message" value="Rendelésed tartalma" />
        <Textarea
          id="message"
          rows={6}
          placeholder="Sorold fel mit szeretnél rendelni..."
        ></Textarea>
      </div>
      <Button type="submit" size="md" gradientDuoTone="purpleToBlue">
        Rendelés elküldése
      </Button>
    </form>
  );
};

export default OrderForm;
