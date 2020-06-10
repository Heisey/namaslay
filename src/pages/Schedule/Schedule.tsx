import React, { useEffect, useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

// ?? Box Components

// ?? Panel Components
import CalendarPanel from '../../components/panels/CalendarPanel/CalendarPanel'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import DynamicDataPanel from '../../components/panels/DynamicDataPanel/DynamicDataPanel'
import TeacherFilterBox from '../../components/boxes/scheduleBoxes/TeacherFilterBox/TeacherFilterBox'
import DifficultiesFilterBox from '../../components/boxes/scheduleBoxes/DifficultiesFilterBox/DifficultiesFilterBox'
import DisciplinesFilterBox from '../../components/boxes/scheduleBoxes/DisciplinesFilterBox/DisciplinesFilterBox'
import ProgramsFilterBox from '../../components/boxes/scheduleBoxes/ProgramsFilterBox/ProgramsFilterBox'
// import { data } from '../../dev_data/images/month'
import axios from 'axios'


import './Schedule.scss';

interface ScheduleProps {
  handleShowLanding: () => void,
  handleShowNav: () => void,
  handleShowPunchCard: () => void,
  handleShowSchedule: () => void,
  handleShowUserProfile: () => void,
  navState: boolean
  // scheduleData: any
}

const Schedule: React.FC<ScheduleProps> = props => {

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    navState
  } = props;

  const [dynamicData, setDynamicData] = useState<string[]>([]);
  const [scheduleData, setScheduleData] = useState<{ teachers: any[]; disciplines: any[]; programs: any[]; difficulties: any[] }>({
    teachers: [],
    disciplines: [],
    programs: [],
    difficulties: []
  });

  useEffect(() => {
    axios.get('/api')
      .then(function (response) {
        setScheduleData({
          teachers: response.data.teachers,
          difficulties: response.data.difficulties,
          disciplines: response.data.disciplines,
          programs: response.data.programs
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const handleTeachersFilter = () => {
    const teachers = scheduleData.teachers.map((t) => t.name)
    teachers.push('Teacher')
    setDynamicData(teachers);
  }

  const handleDisciplinesFilter = () => {
    const disciplines = scheduleData.disciplines.map((t) => t.name)
    disciplines.push('Discipline')
    setDynamicData(disciplines);
  }

  const handleProgramsFilter = () => {
    const programs = scheduleData.programs.map((t) => t.name)
    programs.push('Program')
    setDynamicData(programs);
  }

  const handleDifficultiesFilter = () => {
    const difficulties = scheduleData.difficulties.map((t) => t);
    difficulties.push('Difficulty')
    setDynamicData(difficulties);
  }

  return (
    <div className="Schedule">
      <Nav
        handleShowLanding={handleShowLanding}
        handleShowNav={handleShowNav}
        handleShowPunchCard={handleShowPunchCard}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        navState={navState}
      />
      <div className="Schedule__namaslay">
        <NamaslayPanel
          panelSize='small'
        />
      </div>

      <div className="Schedule__classesLeft">
        Classes Left
      </div>

      <div className="Schedule__calendar">
        <CalendarPanel />
      </div>

      <div className="Schedule__classSelection">
        Class Selection
      </div>

      <div className="Schedule__dynamicSelection">
        <DynamicDataPanel
          data={dynamicData} />
      </div>

      <div className="Schedule__teacherFilter">
        <TeacherFilterBox
          handleTeacherFilter={handleTeachersFilter}
        />
      </div>

      <div className="Schedule__disciplineFilter">
        <DisciplinesFilterBox
          handleDisciplinesFilter={handleDisciplinesFilter}
        />
      </div>

      <div className="Schedule__eventFilter">
        <ProgramsFilterBox
          handleProgramsFilter={handleProgramsFilter}
        />
      </div>

      <div className="Schedule__difficultyFilter">
        <DifficultiesFilterBox
          handleDifficultiesFilter={handleDifficultiesFilter}
        />
      </div>

      <div className="Schedule__clearFilters">
        Clear Filters
      </div>

      <div className="Schedule__teacherInfo">
        Teacher Info
      </div>

      <div className="Schedule__classInfo">
        class info
      </div>
    </div>
  )
}

export default Schedule;
