const DateFormat = {
    LocalDate(date) {
        const dateFR = new Date(date).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit'});
        return dateFR;
    },
    LocalHour(hour) {
        const hourFR = new Date(hour).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit'});
        return hourFR;
    }
    
};

export default DateFormat;