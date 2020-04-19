class Appointment {
    id: string;

    provider: string;

    date: Date;

    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.id = String(Math.round(10));
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;
