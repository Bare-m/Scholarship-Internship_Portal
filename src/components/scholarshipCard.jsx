import "./../styles/scholarshipCard.css";

function ScholarshipCard({ scholarship }) {
  return (
    <div className="scholarship-card">
      <img
        src={scholarship.image}
        alt={scholarship.name}
      />

      <div className="scholarship-info">
        <h3>{scholarship.name}</h3>

        <p>{scholarship.university}</p>

        <p>{scholarship.description}</p>

        <span>{scholarship.deadline}</span>

        <button>View Details</button>
      </div>
    </div>
  );
}

export default ScholarshipCard;