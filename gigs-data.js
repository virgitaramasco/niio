/**
 * ============================================================================
 * NIIO - CALENDARIO DATE / GIGS
 * ============================================================================
 * 
 * COME MODIFICARE / AGGIUNGERE NUOVE DATE:
 * 1. Modifica o aggiungi un blocco tra le parentesi graffe { ... } nell'array NIIO_GIGS qui sotto.
 * 2. Ogni data contiene:
 *    - date:      La data dell'evento (es. "07/11/2026")
 *    - venue:     Il locale o il festival (es. "Ronin", "The Sanctuary", "Officina")
 *    - city:      La città / nazione (es. "Milan, IT", "Verona, IT")
 *    - ticketUrl: Link per i biglietti (es. "https://dice.fm/..." oppure "#" se non ancora disponibile)
 *    - status:    Testo del bottone (es. "Tickets", "Free Entry", "Sold Out", "Info soon")
 * 
 * Per rimuovere una data passata, elimina semplicemente il relativo blocco { ... }.
 * Se non ci sono date in programma, lascia l'array vuoto: window.NIIO_GIGS = [];
 */

window.NIIO_GIGS = [
  {
    date: "13/11/2026",
    venue: "Officina",
    city: "Milan, IT",
    ticketUrl: "https://xceed.me/en/milano/event/soulstice-at-officina-milano-1/250657/channel/soulstice-1",
    status: "Tickets"
  },
  {
    date: "14/11/2026",
    venue: "The Sanctuary",
    city: "Milan, IT",
    ticketUrl: "https://xceed.me/it/milano/event/super-flu-at-the-sanctuary-milan/251375/channel/2a-srl",
    status: "Tickets"
  },
  {
    date: "04/12/2026",
    venue: "The Sanctuary",
    city: "Milan, IT",
    ticketUrl: "#",
    status: "Tickets"
  },
  {
    date: "05/12/2026",
    venue: "Ronin",
    city: "Milan, IT",
    ticketUrl: "#",
    status: "Tickets"
  },
  {
    date: "12/12/2026",
    venue: "The Sanctuary",
    city: "Milan, IT",
    ticketUrl: "#",
    status: "Tickets"
  },
  {
    date: "26/12/2026",
    venue: "Halo",
    city: "Verona, IT",
    ticketUrl: "#",
    status: "Tickets"
  }
];
