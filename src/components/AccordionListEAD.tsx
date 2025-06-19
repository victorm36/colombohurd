import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const gruposEAD = [
  {
    titulo: 'Solicitantes de asilo',
    detalle: 'Personas que han solicitado asilo y su caso está en trámite, o que ya han recibido asilo.'
  },
  {
    titulo: 'Beneficiarios de TPS (Estatus de Protección Temporal)',
    detalle: 'Extranjeros de países designados por USCIS que han recibido o solicitado TPS.'
  },
  {
    titulo: 'Personas con DACA',
    detalle: 'Quienes cuentan con Acción Diferida para los Llegados en la Infancia.'
  },
  {
    titulo: 'Individuos con parole humanitario',
    detalle: 'Incluye parole para cubanos, haitianos, nicaragüenses, venezolanos, u otros casos humanitarios.'
  },
  {
    titulo: 'Solicitantes de ajuste de estatus',
    detalle: 'Por ejemplo, quienes están tramitando la Green Card (Formulario I-485 en trámite).'
  },
  {
    titulo: 'Personas con visas U o T',
    detalle: 'Víctimas de ciertos crímenes (U) o trata de personas (T).'
  },
  {
    titulo: 'Peticionarios bajo VAWA',
    detalle: 'Personas protegidas por la Ley de Violencia contra la Mujer (incluye hombres y niños).'
  },
  {
    titulo: 'Estudiantes con visa F-1',
    detalle: 'Que califican para programas como OPT o CPT.'
  },
  {
    titulo: 'Cónyuges de ciertos titulares de visas H-1B, E, L',
    detalle: 'H-4, E-2, L-2 (según elegibilidad y requisitos específicos).'
  },
  {
    titulo: 'Refugiados y asilados',
    detalle: 'Incluye familiares derivados de refugiados o asilados.'
  },
  {
    titulo: 'Personas con suspensión/cancelación de remoción o NACARA',
    detalle: 'Casos especiales de protección humanitaria.'
  },
  {
    titulo: 'Otros casos especiales',
    detalle: 'Ejemplo: beneficiarios de programas de legalización, SIJ, entre otros.'
  },
];

export function AccordionListEAD() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full mb-8">
        {/* Línea decorativa sutil */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--dorado-elegante)] to-transparent opacity-70" style={{zIndex:1}} />
        <div className="p-10 shadow-[0_4px_32px_rgba(184,134,11,0.08)] border-l-4 border-[var(--dorado-elegante)] relative overflow-hidden" style={{borderRadius: 0, paddingLeft: '2.5rem', background: 'transparent'}}>
          <Typography variant="body1" sx={{ color: '#1a365d', fontSize: { xs: '1.05rem', md: '1.15rem' }, textAlign: 'left' }}>
            Existen diferentes grupos de personas que pueden solicitar la Autorización de Empleo (EAD) en Estados Unidos. A continuación puedes consultar la lista completa de categorías elegibles. Si tienes dudas sobre tu caso, te recomendamos consultar con un abogado de inmigración.
          </Typography>
        </div>
      </div>
      <Accordion sx={{
        borderRadius: 2,
        boxShadow: '0 2px 12px 0 rgba(26,54,93,0.06)',
        background: 'rgba(255,255,255,0.97)',
        '&:before': { display: 'none' },
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
        mt: 2,
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#b8860b', fontSize: 32 }} />}
          aria-controls="panel-elegibles-content"
          id="panel-elegibles-header"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.15rem', md: '1.25rem' },
            color: '#1a365d',
            background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ef 100%)',
            borderRadius: 2,
            minHeight: 56,
            textAlign: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Typography sx={{ fontWeight: 700, width: '100%', textAlign: 'center' }}>
            Ver lista completa de grupos elegibles
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          background: 'transparent',
          color: '#444',
          fontSize: { xs: '1rem', md: '1.1rem' },
          borderTop: '1px solid #e0e7ef',
          textAlign: 'center',
          px: { xs: 1, md: 4 },
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {gruposEAD.map((grupo) => (
              <li key={grupo.titulo} style={{ marginBottom: '1.5rem' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#b8860b', fontSize: '1.08rem', mb: 0.5, textAlign: 'center' }}>
                  {grupo.titulo}
                </Typography>
                <Typography variant="body2" sx={{ color: '#1a365d', fontSize: '1.01rem', textAlign: 'center' }}>
                  {grupo.detalle}
                </Typography>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
} 