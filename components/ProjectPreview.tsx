import {
  Heart,
  Leaf,
  MapPin,
  CalendarDays,
  BookOpen,
  Activity,
  Users,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
export function ProjectPreview({
  visual,
  image,
  name,
}: {
  visual: string;
  image: string;
  name: string;
}) {
  if (visual === "thesis")
    return (
      <div className="thesis-preview">
        <div className="thesis-monitor">
          <div className="preview-topbar">
            <span />
            <span />
            <span />
          </div>
          <img
            draggable={false}
            src="/images/visaia-dashboard.webp"
            alt="VISAIA web monitoring dashboard"
            width="1000"
            height="600"
            loading="lazy"
          />
        </div>
        <img
          draggable={false}
          className="thesis-phone"
          src={image}
          alt="VISAIA mobile application"
          width="900"
          height="844"
          loading="lazy"
        />
        <span className="preview-caption">
          <Leaf size={13} /> One thesis. Two connected experiences.
        </span>
      </div>
    );
  if (visual === "bigbrew")
    return (
      <div className="screenshot-preview">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
          <small>BigBrew / Sales reports</small>
        </div>
        <img
          draggable={false}
          src={image}
          alt="BigBrew POS sales reporting screen"
          width="1100"
          height="579"
          loading="lazy"
        />
      </div>
    );
  if (visual === "revia")
    return (
      <div className="concept-preview revia-preview">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
          <small>Revia / Find your focus</small>
        </div>
        <div className="concept-body">
          <div className="revia-nav">
            revia<span>Explore spaces &nbsp; My bookings</span>
          </div>
          <div className="revia-head">
            <small>Your next study session starts here</small>
            <h4>
              Find your place.
              <br />
              Make room for focus.
            </h4>
          </div>
          <div className="space-cards">
            {["A quiet corner", "Room to collaborate"].map((s, i) => (
              <div key={s}>
                <div className={`space-art space-${i}`}>
                  <BookOpen size={36} />
                </div>
                <strong>{s}</strong>
                <span>
                  <MapPin size={10} /> Study spaces near you
                </span>
              </div>
            ))}
          </div>
          <div className="concept-search">
            <MapPin size={12} /> Explore study spaces{" "}
            <span>
              <CalendarDays size={12} /> Plan a session
            </span>
          </div>
        </div>
        <span className="concept-label">Interface illustration</span>
      </div>
    );
  if (visual === "wellness")
    return (
      <div className="wellness-preview">
        <span className="wellness-ornament">
          <Leaf size={100} strokeWidth={0.8} />
        </span>
        <div className="wellness-copy">
          <span>A little room to breathe.</span>
          <h4>Mabuh-AI</h4>
          <p>
            Check in.
            <br />
            Slow down.
            <br />
            Feel supported.
          </p>
        </div>
        <div className="wellness-phone">
          <div className="phone-notch" />
          <div className="wellness-brand">
            <Leaf size={16} /> MabuhAi
          </div>
          <h4>
            How are you
            <br />
            feeling today?
          </h4>
          <div className="mood-icons">
            <Heart />
            <Sparkles />
            <Leaf />
          </div>
          <div className="wellness-checkin">
            <span>A moment for you</span>
            <strong>Take a deep breath.</strong>
            <div className="breathing-circle">
              <Heart size={25} />
            </div>
          </div>
          <div className="journal-line">
            <BookOpen size={13} /> Your thoughts belong here.
          </div>
        </div>
        <span className="concept-label">Interface illustration</span>
      </div>
    );
  return (
    <div className="concept-preview care-preview">
      <div className="preview-topbar">
        <span />
        <span />
        <span />
        <small>{name} / Care workspace</small>
      </div>
      <div className="care-layout">
        <aside>
          <Heart />
          <LayoutDashboard />
          <Users />
          <CalendarDays />
        </aside>
        <div className="care-content">
          <span className="care-brand">
            <Heart size={14} /> NexaCare
          </span>
          <h4>A clearer picture of care.</h4>
          <p>Patient records and appointments, together.</p>
          <div className="care-features">
            <div>
              <Users size={19} />
              <strong>Patients</strong>
              <span>Connected records</span>
            </div>
            <div>
              <CalendarDays size={19} />
              <strong>Appointments</strong>
              <span>Thoughtful scheduling</span>
            </div>
          </div>
          <div className="care-row">
            <Activity size={15} />
            <span>Doctor workspace</span>
            <i />
          </div>
          <div className="care-row">
            <Users size={15} />
            <span>Administration & HR</span>
            <i />
          </div>
        </div>
      </div>
      <span className="concept-label">Interface illustration</span>
    </div>
  );
}
