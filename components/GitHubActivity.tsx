"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

type Day = { date: string; level: number };
const labels = ["No", "Low", "Moderate", "High", "Very high"];

/** Native SVG calendar, inspired by dev-port's ContributionCalendar. */
export function GitHubActivity() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [selected, setSelected] = useState<Day | null>(null);
  const [cachedAt, setCachedAt] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setDays(data.days ?? []);
        setCachedAt(data.cachedAt ?? null);
      })
      .catch(() => {
        if (!controller.signal.aborted) setDays([]);
      });
    return () => controller.abort();
  }, []);

  const offset = days?.length
    ? new Date(`${days[0].date}T12:00:00Z`).getUTCDay()
    : 0;
  const weeks = Math.ceil(((days?.length ?? 0) + offset) / 7);
  let streak = 0;
  let longest = 0;
  for (const day of days ?? []) {
    streak = day.level ? streak + 1 : 0;
    longest = Math.max(longest, streak);
  }

  return (
    <div className="github-activity">
      <div className="github-heading">
        <div>
          <Github size={21} />
          <span>
            <strong>@kheypaxu</strong>
            <small>
              {cachedAt
                ? `Cached calendar · ${cachedAt.slice(0, 10)}`
                : "Building in public"}
            </small>
          </span>
        </div>
        <a
          href="https://github.com/kheypaxu"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      {days === null ? (
        <p className="github-status" role="status">
          Loading GitHub activity…
        </p>
      ) : !days.length ? (
        <p className="github-status">
          Activity is temporarily unavailable.{" "}
          <a
            href="https://github.com/kheypaxu"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </p>
      ) : (
        <>
          <div className="github-stats">
            <span>
              <strong>{days.filter((day) => day.level > 0).length}</strong>{" "}
              active days
            </span>
            <span>
              Longest streak <strong>{longest} days</strong>
            </span>
          </div>
          <div
            className="github-calendar"
            tabIndex={0}
            role="region"
            aria-label="Scrollable GitHub contribution calendar"
          >
            <svg
              viewBox={`0 0 ${weeks * 13 + 28} 120`}
              role="group"
              aria-label="GitHub contributions over the past year"
            >
              {days.map((day, index) => {
                const week = Math.floor((index + offset) / 7);
                const monthStart = day.date.endsWith("-01") && week < weeks - 2;
                return (
                  <g key={day.date}>
                    {monthStart && (
                      <text x={week * 13 + 26} y={10}>
                        {new Date(`${day.date}T12:00:00Z`).toLocaleDateString(
                          "en",
                          { month: "short", timeZone: "UTC" },
                        )}
                      </text>
                    )}
                    <rect
                      x={week * 13 + 26}
                      y={((index + offset) % 7) * 13 + 20}
                      width={10}
                      height={10}
                      rx={2.5}
                      className={`activity-level-${day.level}`}
                      onPointerEnter={() => setSelected(day)}
                      onClick={() => setSelected(day)}
                    >
                      <title>
                        {day.date}: {labels[day.level]} contribution activity
                      </title>
                    </rect>
                  </g>
                );
              })}
              {["Mon", "Wed", "Fri"].map((label, index) => (
                <text key={label} x={0} y={35 + index * 26}>
                  {label}
                </text>
              ))}
            </svg>
          </div>
          <div className="github-caption">
            <span role="status">
              {selected
                ? `${selected.date} · ${labels[selected.level]} activity`
                : "Hover or tap a day to explore."}
            </span>
            <span>
              Less{" "}
              {[0, 1, 2, 3, 4].map((level) => (
                <i key={level} className={`activity-level-${level}`} />
              ))}{" "}
              More
            </span>
          </div>
        </>
      )}
    </div>
  );
}
