export const services = [
  {
    id: 's1',
    name: 'Consulta General',
    duration: '30 min',
    price: '$15.000',
    icon: 'stethoscope',
    description: 'Evaluación bucal completa y diagnóstico inicial.'
  },
  {
    id: 's2',
    name: 'Limpieza Dental',
    duration: '45 min',
    price: '$25.000',
    icon: 'sparkles',
    description: 'Eliminación de placa y sarro, pulido dental.'
  },
  {
    id: 's3',
    name: 'Blanqueamiento',
    duration: '60 min',
    price: '$60.000',
    icon: 'smile',
    description: 'Tratamiento estético para aclarar el color de los dientes.'
  },
  {
    id: 's4',
    name: 'Ortodoncia (Evaluación)',
    duration: '40 min',
    price: '$20.000',
    icon: 'braces',
    description: 'Revisión para inicio de tratamiento de ortodoncia.'
  }
];

export const professionals = [
  {
    id: 'p1',
    name: 'Dra. María Laura Gómez',
    specialty: 'Odontología General y Estética',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'p2',
    name: 'Dr. Carlos Ruiz',
    specialty: 'Ortodoncia e Implantes',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

export const generateAvailableTimeSlots = () => {
  return [
    '09:00', '09:30', '10:00', '11:00', '11:30', 
    '14:00', '14:30', '15:30', '16:00', '17:30'
  ];
};
