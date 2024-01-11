import './Program.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Program = () => {
  return (
    <div className="programs">
      {/* Program 1 */}
      <div className="program">
        <img src={program_1} alt="Graduation degree" />
        <div className="caption">
          <img src={program_icon_1} alt="Graduation icon" />
          <p>Graduation degree</p>
        </div>
      </div>

      {/* Program 2 */}
      <div className="program">
        <img src={program_2} alt="Master degree" />
        <div className="caption">
          <img src={program_icon_2} alt="Master icon" />
          <p>Master degree</p>
        </div>
      </div>

      {/* Program 3 */}
      <div className="program">
        <img src={program_3} alt="Post Graduation" />
        <div className="caption">
          <img src={program_icon_3} alt="Post Graduation icon" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
