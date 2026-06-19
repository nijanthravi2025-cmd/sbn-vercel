import '../styles/CheckMembership.css';

export default function CheckMembership() {
  return (
    <div className="check-membership-page">
      <div className="cm-hero">
        <h1>Validate Membership</h1>
        <p>Home / Validate Membership</p>
      </div>

      <div className="cm-content">
        <div className="cm-card">
          <h2>Validate Membership</h2>
          
          <form className="cm-form">
            <div className="form-group">
              <label><span className="required">*</span> Zone</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option value="1">Zone 1</option>
                <option value="2">Zone 2</option>
              </select>
            </div>
            
            <div className="form-group">
              <label><span className="required">*</span> LO Name</label>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option value="1">LO 1</option>
                <option value="2">LO 2</option>
              </select>
            </div>

            <div className="form-group submit-group">
              <button type="button" className="search-btn">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
