export default function ContactMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95328.56905003857!2d-81.76665243063912!3d41.49399549127489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830ef2ee3686b2d%3A0xed04cb55f7621842!2sCleveland%2C%20OH!5e0!3m2!1sen!2sus!4v1704498043584!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Crown & Glory Salon Location"
      ></iframe>
    </div>
  )
}
