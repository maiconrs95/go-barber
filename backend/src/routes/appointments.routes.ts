import { Router } from 'express';
import { parseISO, startOfHour, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const parsedDate = startOfHour(parseISO(date));
    const existingSchedule = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
    );

    if (existingSchedule) {
        return response.status(400).json({ message: 'Invalid date.' });
    }

    const appointment = {
        id: String(Math.round(10)),
        provider,
        date: parsedDate,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
