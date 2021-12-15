import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutAccordion() {
  const h1_color ='#ca6666';
  const content_color ='#ca7777';
  return (
    <div>
      <Accordion className="bg-red-100">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color={h1_color}><strong>Saúde</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={content_color}>
            Ante todo consideramos que o importante é coidar a saúde. Para elo debemos actuar cómo un equipo e respetar as normas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-red-100">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={h1_color}><strong>Respeto</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={content_color}>
            O respeto mutuo é algo que desexamos todos, por iso fomentamos o uso das boas prácticas a hora de relacionarse cos demáis como por exemplo, respetar cando alguén está falando, dar as gracias, pedir permiso, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-red-100">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography color={h1_color}><strong>Educación e desenvolvemento</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={content_color}>
            Tratamos de que os pequechos adquiran coñecementos e se desenvolvan mediante xogos, un dos métodos máis eficaces segundo os estudos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-red-100">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography color={h1_color}><strong>E por suposto, a felicidade</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={content_color}>
            Pero o verdadeiro obxetivo de todo isto é que o cativo e as súas familias gañen en felicidade, diso sí que temos permitido que se contaxien ;)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}