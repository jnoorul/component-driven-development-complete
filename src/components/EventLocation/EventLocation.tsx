export function EventLocation() {
    return (
        <div className="py-2">
            <h3 className="py-2 text-xl font-bold">Venue</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8030832152895!2d103.854007051392!3d1.29256986210964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a6259eef7d%3A0xa7a26f9aefaa1315!2sOne%20Raffles%20Link!5e0!3m2!1sen!2ssg!4v1663834769105!5m2!1sen!2ssg"
                className="w-full md:w-1/2 h-48 "
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location"
            ></iframe>
        </div>
    );
}
