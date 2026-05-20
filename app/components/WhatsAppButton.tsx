const phoneNumber = "923008402371";
const defaultMessage = "Hi! I am interested in AJS Solar services.";

const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  defaultMessage
)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-7"
      >
        <path
          fill="currentColor"
          d="M19.11 17.14c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.61.14-.7.89-.86 1.07-.32.21-.59.07-1.17-.43-2.23-1.37c-.82-.73-1.37-1.63-1.53-1.91s-.02-.43.12-.57c.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34s-.96.93-.96 2.27.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.2-.52-.34zM16.06 5.33c-5.87 0-10.64 4.77-10.64 10.64 0 1.88.49 3.72 1.42 5.34L5 27l5.82-1.83c1.57.86 3.34 1.31 5.24 1.31 5.87 0 10.64-4.77 10.64-10.64S21.93 5.33 16.06 5.33zm0 19.18c-1.65 0-3.27-.45-4.67-1.31l-.33-.2-3.45 1.09 1.12-3.36-.22-.34a8.62 8.62 0 0 1-1.35-4.55c0-4.77 3.88-8.65 8.65-8.65s8.65 3.88 8.65 8.65-3.88 8.65-8.65 8.65z"
        />
      </svg>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
