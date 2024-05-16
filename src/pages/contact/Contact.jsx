import { c_address, c_name, c_phone, c_whatsapp } from "../../info/info";

const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Shop Name:</label>
          <p>{c_name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Owner Name:</label>
          <p>S Kumar</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <p>{c_address}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">GST:</label>
          <p>22DXUPK4063AAA</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mobile:</label>
          <p>{c_phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">WhatsApp:</label>
          <p>{c_whatsapp}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
