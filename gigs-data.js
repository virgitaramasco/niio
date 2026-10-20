/**
 * ============================================================================
 * NIIO - CALENDARIO DATE / GIGS
 * ============================================================================
 * 
 * COME MODIFICARE / AGGIUNGERE NUOVE DATE:
 * 1. Modifica o aggiungi un blocco tra le parentesi graffe { ... } nell'array NIIO_GIGS qui sotto.
 * 2. Ogni data contiene:
 *    - date:      La data dell'evento (es. "28/11/2026")
 *    - venue:     Il locale o il festival (es. "The Sanctuary", "Apophis", "Apollo")
 *    - city:      La città / nazione (es. "Milan, IT", "Florence, IT", "Tokyo, JP")
 *    - ticketUrl: Link per i biglietti (es. "https://dice.fm/..." oppure "#" se non ancora disponibile)
 *    - status:    Testo del bottone (es. "Tickets", "Free Entry", "Sold Out", "Info soon")
 * 
 * Per rimuovere una data passata, elimina semplicemente il relativo blocco { ... }.
 * Se non ci sono date in programma, lascia l'array vuoto: window.NIIO_GIGS = [];
 */

window.NIIO_GIGS = [
  {
    date: "28/11/2026",
    venue: "The Sanctuary",
    city: "Milan, IT",
    ticketUrl: "#",
    status: "Tickets"
  },
  {
    date: "12/12/2026",
    venue: "Apollo Club",
    city: "Milan, IT",
    ticketUrl: "#",
    status: "Tickets"
  },
  {
    date: "31/12/2026",
    venue: "New Year's Eve Special",
    city: "Florence, IT",
    ticketUrl: "#",
    status: "Tickets"
  }
];
