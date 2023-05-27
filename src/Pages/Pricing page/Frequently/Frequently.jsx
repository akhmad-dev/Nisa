import React, { useState } from "react";
import Align from "./Align/Align";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const Frequently = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <div className="Frequently">
        <div className="Frequently_Main">
          <div className="Frequently_question">
            <button>MEET OUR COMPANY</button>
            <h1>
              Frequently <span>Asked Questions</span>
            </h1>
          </div>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                How can I do this thing with that thing?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid harum suscipit voluptates rem, animi aliquam quasi.
                Molestiae quas odit suscipit delectus, reprehenderit modi ea
                reiciendis consequuntur labore distinctio sunt.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                How can I do this thing with that thing?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid harum suscipit voluptates rem, animi aliquam quasi.
                Molestiae quas odit suscipit delectus, reprehenderit modi ea
                reiciendis consequuntur labore distinctio sunt.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                How can I do this thing with that thing?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid harum suscipit voluptates rem, animi aliquam quasi.
                Molestiae quas odit suscipit delectus, reprehenderit modi ea
                reiciendis consequuntur labore distinctio sunt.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                How can I do this thing with that thing?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid harum suscipit voluptates rem, animi aliquam quasi.
                Molestiae quas odit suscipit delectus, reprehenderit modi ea
                reiciendis consequuntur labore distinctio sunt.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                How can I do this thing with that thing?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquid harum suscipit voluptates rem, animi aliquam quasi.
                Molestiae quas odit suscipit delectus, reprehenderit modi ea
                reiciendis consequuntur labore distinctio sunt.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Align />
    </>
  );
};

export default Frequently;
