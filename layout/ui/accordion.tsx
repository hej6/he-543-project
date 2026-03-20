"use client";

import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import {
  MdOutlineArrowCircleUp,
  MdOutlineArrowCircleDown,
} from "react-icons/md";

const AccordionUI: React.FC = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdOutlineArrowCircleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Cursed is the ground for our sake.
            Both thorns and thistles it shall bring forth for us…
            For out of the ground we were taken;
            For dust we are…
            And to dust we shall return.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdOutlineArrowCircleUp />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            The path of the righteous man is beset on all sides
            by the inequities of the selfish
            and the tyranny of evil men.
            Blessed is he who, in the name of charity and good will,
            shepherds the weak through the valley of darkness,
            for he is truly his brother’s keeper
            and the finder of lost children.

            And I will strike down upon thee
            with great vengeance and furious anger
            those who attempt to poison and destroy my brothers.
            And you will know my name is the Lord
            when I lay my vengeance upon thee.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionUI;
