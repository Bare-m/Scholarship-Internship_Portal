import "./../styles/scholarshipCard.css";

function InternshipCard({ internship }) {
  return (
    <article className="internship-card">
      <img src={internship.image} alt="" />

      <div className="internship-info">
        <h3>{internship.name}</h3>
        <p>{internship.company}</p>
        <p>{internship.description}</p>
        <span>{internship.deadline}</span>
        <button type="button">View Details</button>
      </div>
    </article>
  );
}

export default InternshipCard;
