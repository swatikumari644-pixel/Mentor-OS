"use client";

import React from "react";

export default function StudentProgress() {
  const subjects = [
    { name: "Frontend Development", value: 85, className: "blue" },
    { name: "Backend Development", value: 72, className: "green" },
    { name: "Database", value: 68, className: "purple" },
    { name: "UI/UX Design", value: 90, className: "orange" },
    { name: "API Integration", value: 60, className: "red" },
  ];

  const activities = [
    {
      icon: "✓",
      title: "Submitted Assignment",
      subtitle: "UI/UX Design Implementation",
      time: "2 hours ago",
      type: "green",
    },
    {
      icon: "▣",
      title: "Completed Assignment",
      subtitle: "Design Database Schema",
      time: "1 day ago",
      type: "blue",
    },
    {
      icon: "▣",
      title: "Received AI Feedback",
      subtitle: "Good work! Your code structure is clean.",
      time: "2 days ago",
      type: "purple",
    },
    {
      icon: "✓",
      title: "Submitted Assignment",
      subtitle: "Create REST APIs",
      time: "3 days ago",
      type: "green",
    },
    {
      icon: "★",
      title: "Achieved Milestone",
      subtitle: "Completed 5 assignments!",
      time: "5 days ago",
      type: "orange",
    },
  ];

  const goals = [
    "Complete 2 more assignments",
    "Maintain 80%+ progress",
    "Submit final project",
    "Get 4.5+ AI feedback score",
  ];

  return (
    <>
      <div className="progressPage">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="brand">
            <div className="brandLogo">🎓</div>
            <div>
              <div className="brandName">MentorOS</div>
              <div className="brandTagline">Learn · Build · Grow</div>
            </div>
          </div>

          <nav className="navigation">
            <div className="navItem">
              <span className="navIcon">▣</span>
              <span>Dashboard</span>
            </div>

            <div className="navItem">
              <span className="navIcon">▤</span>
              <span>My Assignments</span>
            </div>

            <div className="navItem">
              <span className="navIcon">▣</span>
              <span>My Submissions</span>
            </div>

            <div className="navItem active">
              <span className="navIcon">⌁</span>
              <span>Progress</span>
            </div>

            <div className="navItem">
              <span className="navIcon">♙</span>
              <span>AI Feedback</span>
            </div>

            <div className="navItem">
              <span className="navIcon">▤</span>
              <span>Learning Resources</span>
            </div>

            <div className="navItem notificationNav">
              <span className="navIcon">♧</span>
              <span>Notifications</span>
              <span className="notificationBadge">3</span>
            </div>

            <div className="navItem">
              <span className="navIcon">♙</span>
              <span>Profile</span>
            </div>

            <div className="navItem">
              <span className="navIcon">⚙</span>
              <span>Settings</span>
            </div>
          </nav>

          <div className="sidebarQuote">
            <div className="rocket">🚀</div>
            <div className="quoteTitle">Keep Going!</div>
            <div className="quoteText">
              “Progress today creates opportunities tomorrow.”
            </div>
          </div>
        </aside>

        {/* MAIN AREA */}
        <main className="mainArea">
          {/* TOP HEADER */}
          <header className="topHeader">
            <div className="searchBox">
              <span className="searchIcon">⌕</span>
              <span>Search assignments, resources, or anything...</span>
            </div>

            <div className="headerRight">
              <div className="headerNotification">
                ♧
                <span className="headerBadge">3</span>
              </div>

              <div className="profileAvatar">SK</div>

              <div className="profileInfo">
                <strong>Student</strong>
                <span>Student</span>
              </div>

              <span className="downArrow">⌄</span>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <div className="content">
            {/* PAGE TITLE */}
            <div className="pageHeading">
              <div className="headingLeft">
                <div className="headingIcon">▥</div>

                <div>
                  <h1>My Progress</h1>
                  <p>
                    Track your learning journey, see your growth, and stay
                    motivated.
                  </p>
                </div>
              </div>

              <button className="monthButton">
                <span>▣</span>
                This Month
                <span>⌄</span>
              </button>
            </div>

            {/* TOP GRID */}
            <div className="dashboardGrid">
              <div className="leftColumn">
                {/* STAT CARDS */}
                <section className="statsGrid">
                  <div className="statCard">
                    <div className="statIcon purpleIcon">▥</div>
                    <div>
                      <div className="statValue">78%</div>
                      <div className="statLabel">Overall Progress</div>
                    </div>
                    <div className="statChange greenText">
                      ↑ +12% <span>from last month</span>
                    </div>
                  </div>

                  <div className="statCard">
                    <div className="statIcon greenIcon">✓</div>
                    <div>
                      <div className="statValue">6</div>
                      <div className="statLabel">Assignments Completed</div>
                    </div>
                    <div className="statChange greenText">
                      ↑ 2 <span>this month</span>
                    </div>
                  </div>

                  <div className="statCard">
                    <div className="statIcon orangeIcon">◷</div>
                    <div>
                      <div className="statValue">12h</div>
                      <div className="statLabel">Learning Hours</div>
                    </div>
                    <div className="statChange greenText">
                      ↑ +3h <span>from last month</span>
                    </div>
                  </div>

                  <div className="statCard">
                    <div className="statIcon yellowIcon">★</div>
                    <div>
                      <div className="statValue">4.2</div>
                      <div className="statLabel">AI Feedback Score</div>
                    </div>
                    <div className="statChange goodText">
                      Good Performance
                    </div>
                  </div>
                </section>

                {/* PROGRESS OVERVIEW */}
                <section className="card overviewCard">
                  <div className="cardHeading">
                    <div>
                      <h2>Progress Overview</h2>
                      <p>Your learning progress over time</p>
                    </div>

                    <button className="smallSelect">
                      Overall Progress
                      <span>⌄</span>
                    </button>
                  </div>

                  <div className="chart">
                    <div className="yAxis">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    <div className="chartArea">
                      <div className="gridLine line100" />
                      <div className="gridLine line75" />
                      <div className="gridLine line50" />
                      <div className="gridLine line25" />
                      <div className="gridLine line0" />

                      <div className="areaShape" />

                      <div className="chartLine">
                        <span className="point p1" />
                        <span className="point p2" />
                        <span className="point p3" />
                        <span className="point p4" />
                        <span className="point p5" />
                        <span className="point p6" />
                        <span className="point p7" />
                        <span className="point p8" />
                        <span className="point p9" />
                      </div>

                      <div className="chartValue">78%</div>

                      <div className="xAxis">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                        <span>Sep</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* BOTTOM LEFT */}
                <section className="bottomGrid">
                  <div className="card activityCard">
                    <div className="cardHeading">
                      <div>
                        <h2>◷ &nbsp;Recent Activity</h2>
                      </div>
                      <button className="viewAll">View All</button>
                    </div>

                    <div className="activityList">
                      {activities.map((activity) => (
                        <div className="activityItem" key={activity.title + activity.time}>
                          <div className={`activityIcon ${activity.type}`}>
                            {activity.icon}
                          </div>

                          <div className="activityText">
                            <strong>{activity.title}</strong>
                            <span>{activity.subtitle}</span>
                          </div>

                          <div className="activityTime">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LEARNING INSIGHTS */}
                  <div className="card insightsCard">
                    <div className="cardHeading">
                      <div>
                        <h2>💡 &nbsp;Learning Insights</h2>
                      </div>
                    </div>

                    <div className="insightItem">
                      <div className="insightIcon greenIcon">↗</div>
                      <div>
                        <strong>You&apos;re 12% ahead</strong>
                        <span>
                          You&apos;re progressing faster than last month.
                        </span>
                      </div>
                    </div>

                    <div className="insightItem">
                      <div className="insightIcon blueIcon">◷</div>
                      <div>
                        <strong>Most active on Tuesdays</strong>
                        <span>You submit more work on Tuesdays.</span>
                      </div>
                    </div>

                    <div className="insightItem">
                      <div className="insightIcon purpleIcon">▥</div>
                      <div>
                        <strong>Frontend is your strongest subject</strong>
                        <span>You have 85% completion rate in Frontend.</span>
                      </div>
                    </div>

                    <div className="recommended">
                      <div className="recommendedTitle">
                        <span>★</span>
                        Recommended Next Steps
                      </div>

                      <div className="recommendedBox">
                        <div className="recommendIcon">▣</div>
                        <div className="recommendText">
                          <strong>Start Next Assignment</strong>
                          <span>API Integration</span>
                          <small>Due: 15 Sep 2025</small>
                        </div>
                        <button className="assignmentButton">
                          View Assignment
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN */}
              <aside className="rightColumn">
                {/* MOTIVATION */}
                <div className="motivationCard">
                  <div>
                    <h2>
                      You&apos;re
                      <br />
                      Making Great
                      <br />
                      Progress!
                    </h2>
                    <p>
                      Keep learning, keep
                      <br />
                      building. You&apos;re closer
                      <br />
                      to your goals.
                    </p>
                  </div>

                  <div className="trophy">🏆</div>
                </div>

                {/* SUBJECT PROGRESS */}
                <section className="card subjectCard">
                  <div className="cardHeading">
                    <h2>Subject-wise Progress</h2>
                  </div>

                  <div className="subjectList">
                    {subjects.map((subject) => (
                      <div className="subjectItem" key={subject.name}>
                        <div className="subjectTop">
                          <span>{subject.name}</span>
                          <strong>{subject.value}%</strong>
                        </div>

                        <div className="subjectBar">
                          <div
                            className={`subjectFill ${subject.className}`}
                            style={{ width: `${subject.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* STREAK */}
                <section className="card streakCard">
                  <div className="sectionTitle">
                    <span>🔥</span>
                    <strong>Your Streak</strong>
                  </div>

                  <div className="streakContent">
                    <div className="fireBox">🔥</div>

                    <div>
                      <div className="streakDays">12 Days</div>
                      <div className="streakTitle">Learning Streak</div>
                      <p>
                        Keep it up! Consistency leads
                        <br />
                        to mastery.
                      </p>
                    </div>
                  </div>
                </section>

                {/* GOALS */}
                <section className="card goalsCard">
                  <div className="sectionTitle goalTitle">
                    <span>🎯</span>
                    <strong>Upcoming Goals</strong>
                    <button>View All</button>
                  </div>

                  <div className="goalList">
                    {goals.map((goal) => (
                      <div className="goalItem" key={goal}>
                        <span className="emptyCircle" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* QUOTE */}
                <div className="largeQuoteCard">
                  <div className="quoteMark">“</div>
                  <p>
                    “Small steps every day
                    <br />
                    lead to big results.”
                  </p>
                  <strong>— MentorOS</strong>
                  <div className="mountains">⚑</div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .progressPage {
          min-height: 100vh;
          display: flex;
          background: #f5f8fd;
          color: #10203d;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .sidebar {
          width: 194px;
          min-height: 100vh;
          background: #10243d;
          color: white;
          padding: 15px 10px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 7px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .brandLogo {
          font-size: 25px;
        }

        .brandName {
          font-size: 18px;
          font-weight: 800;
        }

        .brandTagline {
          margin-top: 2px;
          font-size: 8px;
          color: #c5d0df;
        }

        .navigation {
          margin-top: 17px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .navItem {
          min-height: 32px;
          padding: 7px 10px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          color: #edf2f9;
          cursor: pointer;
        }

        .navItem.active {
          background: #2468e8;
          box-shadow: 0 5px 14px rgba(36, 104, 232, 0.25);
        }

        .navIcon {
          width: 14px;
          text-align: center;
          font-size: 14px;
        }

        .notificationNav {
          position: relative;
        }

        .notificationBadge {
          margin-left: auto;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ef4b78;
          font-size: 8px;
          font-weight: 700;
        }

        .sidebarQuote {
          margin-top: auto;
          padding: 16px 13px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.07);
        }

        .rocket {
          font-size: 27px;
          margin-bottom: 9px;
        }

        .quoteTitle {
          font-size: 11px;
          font-weight: 800;
        }

        .quoteText {
          margin-top: 6px;
          color: #c7d3e5;
          font-size: 9px;
          line-height: 1.5;
        }

        .mainArea {
          min-width: 0;
          flex: 1;
        }

        .topHeader {
          height: 53px;
          padding: 0 20px;
          background: white;
          border-bottom: 1px solid #e1e8f2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .searchBox {
          width: 420px;
          height: 33px;
          padding: 0 12px;
          border-radius: 7px;
          background: #f0f4f9;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #65748e;
          font-size: 10px;
        }

        .searchIcon {
          font-size: 20px;
          color: #3c65a0;
          line-height: 1;
        }

        .headerRight {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .headerNotification {
          position: relative;
          font-size: 17px;
          margin-right: 5px;
        }

        .headerBadge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ed466d;
          color: white;
          font-size: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profileAvatar {
          width: 31px;
          height: 31px;
          border-radius: 50%;
          background: #10213a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
        }

        .profileInfo {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .profileInfo strong {
          font-size: 10px;
        }

        .profileInfo span {
          color: #70809a;
          font-size: 8px;
        }

        .downArrow {
          color: #536987;
          font-size: 14px;
          margin-left: 4px;
        }

        .content {
          padding: 16px 15px 20px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .pageHeading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 11px;
        }

        .headingLeft {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .headingIcon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #e7f0ff;
          color: #1465e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 23px;
        }

        .pageHeading h1 {
          margin: 0;
          font-size: 21px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .pageHeading p {
          margin: 4px 0 0;
          color: #536b91;
          font-size: 9px;
        }

        .monthButton {
          height: 31px;
          min-width: 102px;
          border: 1px solid #dbe5f2;
          background: white;
          border-radius: 6px;
          color: #233754;
          font-size: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .dashboardGrid {
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(190px, 1fr);
          gap: 10px;
        }

        .leftColumn,
        .rightColumn {
          min-width: 0;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          margin-bottom: 9px;
        }

        .statCard {
          min-height: 72px;
          padding: 10px;
          background: white;
          border: 1px solid #dce6f2;
          border-radius: 7px;
          position: relative;
          display: grid;
          grid-template-columns: 34px 1fr;
          column-gap: 8px;
        }

        .statIcon {
          width: 34px;
          height: 34px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          grid-row: span 2;
        }

        .purpleIcon {
          background: #eee8ff;
          color: #7348e8;
        }

        .greenIcon {
          background: #dcf7ed;
          color: #09a877;
        }

        .orangeIcon {
          background: #fff2d7;
          color: #e99a00;
        }

        .yellowIcon {
          background: #fff0cf;
          color: #ef9c08;
        }

        .blueIcon {
          background: #e5efff;
          color: #176ee8;
        }

        .statValue {
          font-size: 17px;
          line-height: 1;
          font-weight: 800;
        }

        .statLabel {
          margin-top: 4px;
          color: #4c6386;
          font-size: 8px;
        }

        .statChange {
          grid-column: 2;
          margin-top: 5px;
          font-size: 7px;
          font-weight: 700;
        }

        .statChange span {
          font-weight: 500;
        }

        .greenText {
          color: #09a877;
        }

        .goodText {
          color: #55708f;
        }

        .card {
          background: white;
          border: 1px solid #dce6f2;
          border-radius: 7px;
        }

        .overviewCard {
          padding: 9px 10px 8px;
          margin-bottom: 9px;
        }

        .cardHeading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cardHeading h2 {
          margin: 0;
          font-size: 11px;
          font-weight: 800;
        }

        .cardHeading p {
          margin: 2px 0 0;
          font-size: 7px;
          color: #6a7e9c;
        }

        .smallSelect {
          border: 1px solid #dce6f2;
          background: white;
          height: 25px;
          min-width: 91px;
          border-radius: 5px;
          padding: 0 7px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #314764;
          font-size: 7px;
        }

        .chart {
          height: 120px;
          margin-top: 8px;
          display: flex;
        }

        .yAxis {
          width: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2px 0 17px;
          color: #71829c;
          font-size: 7px;
        }

        .chartArea {
          flex: 1;
          position: relative;
          margin-left: 4px;
          margin-bottom: 17px;
        }

        .gridLine {
          position: absolute;
          left: 0;
          right: 0;
          border-top: 1px solid #e8eef6;
        }

        .line100 {
          top: 0;
        }

        .line75 {
          top: 25%;
        }

        .line50 {
          top: 50%;
        }

        .line25 {
          top: 75%;
        }

        .line0 {
          bottom: 0;
        }

        .areaShape {
          position: absolute;
          inset: 0 0 0 0;
          clip-path: polygon(
            0% 82%,
            12.5% 67%,
            25% 62%,
            37.5% 49%,
            50% 46%,
            62.5% 35%,
            75% 30%,
            87.5% 20%,
            100% 12%,
            100% 100%,
            0% 100%
          );
          background: rgba(51, 126, 235, 0.12);
        }

        .chartLine {
          position: absolute;
          inset: 0;
        }

        .chartLine:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: #2879ea;
          clip-path: polygon(
            0% 82%,
            12.5% 67%,
            25% 62%,
            37.5% 49%,
            50% 46%,
            62.5% 35%,
            75% 30%,
            87.5% 20%,
            100% 12%
          );
          height: 2px;
          clip-path: polygon(
            0% 81%,
            12.5% 66%,
            25% 61%,
            37.5% 48%,
            50% 45%,
            62.5% 34%,
            75% 29%,
            87.5% 19%,
            100% 11%
          );
        }

        .point {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2879ea;
          transform: translate(-50%, -50%);
        }

        .p1 {
          left: 0%;
          top: 82%;
        }

        .p2 {
          left: 12.5%;
          top: 67%;
        }

        .p3 {
          left: 25%;
          top: 62%;
        }

        .p4 {
          left: 37.5%;
          top: 49%;
        }

        .p5 {
          left: 50%;
          top: 46%;
        }

        .p6 {
          left: 62.5%;
          top: 35%;
        }

        .p7 {
          left: 75%;
          top: 30%;
        }

        .p8 {
          left: 87.5%;
          top: 20%;
        }

        .p9 {
          left: 100%;
          top: 12%;
        }

        .chartValue {
          position: absolute;
          right: -7px;
          top: 1%;
          background: #142b4b;
          color: white;
          padding: 3px 5px;
          border-radius: 3px;
          font-size: 7px;
          font-weight: 700;
        }

        .xAxis {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -16px;
          display: flex;
          justify-content: space-between;
          color: #71829c;
          font-size: 7px;
        }

        .bottomGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .activityCard,
        .insightsCard {
          padding: 9px 10px;
        }

        .viewAll {
          border: none;
          background: none;
          color: #176ee8;
          font-size: 7px;
          font-weight: 700;
        }

        .activityList {
          margin-top: 7px;
        }

        .activityItem {
          min-height: 31px;
          display: flex;
          align-items: center;
          gap: 7px;
          border-bottom: 1px solid #eef2f7;
        }

        .activityItem:last-child {
          border-bottom: none;
        }

        .activityIcon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
        }

        .activityIcon.green {
          background: #dcf7ed;
          color: #0aaf7c;
        }

        .activityIcon.blue {
          background: #e6f0ff;
          color: #2673e8;
        }

        .activityIcon.purple {
          background: #eee7ff;
          color: #7549e8;
        }

        .activityIcon.orange {
          background: #fff0d2;
          color: #ec9900;
        }

        .activityText {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .activityText strong {
          font-size: 7px;
        }

        .activityText span {
          color: #617694;
          font-size: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .activityTime {
          color: #627796;
          font-size: 6px;
          white-space: nowrap;
        }

        .insightItem {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 0;
          border-bottom: 1px solid #eef2f7;
        }

        .insightIcon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .insightItem > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .insightItem strong {
          font-size: 7px;
        }

        .insightItem span {
          color: #607593;
          font-size: 6px;
        }

        .recommended {
          padding-top: 7px;
        }

        .recommendedTitle {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 7px;
          font-weight: 800;
        }

        .recommendedBox {
          margin-top: 5px;
          padding: 6px;
          border-radius: 6px;
          background: #eef5ff;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .recommendIcon {
          width: 22px;
          height: 22px;
          border-radius: 5px;
          background: white;
          color: #176ee8;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .recommendText {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .recommendText strong {
          font-size: 7px;
        }

        .recommendText span,
        .recommendText small {
          color: #617695;
          font-size: 6px;
        }

        .assignmentButton {
          border: none;
          background: #176ee8;
          color: white;
          border-radius: 4px;
          padding: 6px 8px;
          font-size: 6px;
          font-weight: 700;
        }

        .rightColumn {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .motivationCard {
          min-height: 102px;
          border-radius: 7px;
          background: #e7f1ff;
          padding: 12px;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
        }

        .motivationCard h2 {
          margin: 0;
          font-size: 13px;
          line-height: 1.15;
          font-weight: 800;
        }

        .motivationCard p {
          margin: 7px 0 0;
          color: #506887;
          font-size: 7px;
          line-height: 1.5;
        }

        .trophy {
          align-self: flex-end;
          font-size: 43px;
          margin-right: 4px;
          margin-bottom: 2px;
        }

        .subjectCard {
          padding: 10px;
        }

        .subjectList {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .subjectItem {
          width: 100%;
        }

        .subjectTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 7px;
          margin-bottom: 4px;
        }

        .subjectTop strong {
          font-size: 7px;
        }

        .subjectBar {
          width: 100%;
          height: 4px;
          border-radius: 10px;
          background: #e7edf5;
          overflow: hidden;
        }

        .subjectFill {
          height: 100%;
          border-radius: 10px;
        }

        .subjectFill.blue {
          background: #2e8df5;
        }

        .subjectFill.green {
          background: #0caf7d;
        }

        .subjectFill.purple {
          background: #8550e8;
        }

        .subjectFill.orange {
          background: #f5a30a;
        }

        .subjectFill.red {
          background: #f4515d;
        }

        .streakCard,
        .goalsCard {
          padding: 10px;
        }

        .sectionTitle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
        }

        .streakContent {
          margin-top: 9px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .fireBox {
          width: 39px;
          height: 39px;
          border-radius: 7px;
          background: #fff0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .streakDays {
          font-size: 12px;
          font-weight: 800;
        }

        .streakTitle {
          margin-top: 2px;
          color: #4d6587;
          font-size: 7px;
        }

        .streakContent p {
          margin: 2px 0 0;
          color: #7687a0;
          font-size: 6px;
          line-height: 1.3;
        }

        .goalTitle button {
          margin-left: auto;
          border: none;
          background: none;
          color: #176ee8;
          font-size: 6px;
        }

        .goalList {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .goalItem {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #334b6d;
          font-size: 7px;
        }

        .emptyCircle {
          width: 11px;
          height: 11px;
          border: 1px solid #bac9db;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .largeQuoteCard {
          min-height: 130px;
          border-radius: 7px;
          background: #e2efff;
          padding: 12px;
          position: relative;
          overflow: hidden;
        }

        .quoteMark {
          color: #8db4ee;
          font-size: 27px;
          line-height: 1;
        }

        .largeQuoteCard p {
          margin: 2px 0 7px;
          color: #49688f;
          font-size: 10px;
          line-height: 1.45;
          font-weight: 600;
        }

        .largeQuoteCard strong {
          font-size: 7px;
        }

        .mountains {
          position: absolute;
          right: 12px;
          bottom: 7px;
          font-size: 35px;
          color: #4386d9;
        }

        @media (max-width: 1000px) {
          .sidebar {
            width: 165px;
          }

          .dashboardGrid {
            grid-template-columns: 1fr;
          }

          .rightColumn {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 750px) {
          .sidebar {
            width: 62px;
            padding: 12px 7px;
          }

          .brandName,
          .brandTagline,
          .navItem span:not(.navIcon),
          .sidebarQuote {
            display: none;
          }

          .brand {
            justify-content: center;
            padding: 0 0 15px;
          }

          .navItem {
            justify-content: center;
            padding: 8px;
          }

          .notificationBadge {
            position: absolute;
            right: 3px;
            top: 2px;
          }

          .statsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bottomGrid {
            grid-template-columns: 1fr;
          }

          .rightColumn {
            grid-template-columns: 1fr;
          }

          .searchBox {
            width: 250px;
          }
        }
      `}</style>
    </>
  );
}