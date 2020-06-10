import React, { useEffect, useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

// ?? Box Components
import TeacherFilterBox from '../../components/boxes/scheduleBoxes/TeacherFilterBox/TeacherFilterBox'
import DifficultiesFilterBox from '../../components/boxes/scheduleBoxes/DifficultiesFilterBox/DifficultiesFilterBox'
import DisciplinesFilterBox from '../../components/boxes/scheduleBoxes/DisciplinesFilterBox/DisciplinesFilterBox'
import ProgramsFilterBox from '../../components/boxes/scheduleBoxes/ProgramsFilterBox/ProgramsFilterBox'
// ?? Panel Components
import CalendarPanel from '../../components/panels/CalendarPanel/CalendarPanel'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import DynamicDataPanel from '../../components/panels/DynamicDataPanel/DynamicDataPanel'
import ClassSelectionPanel from '../../components/panels/ClassSelectionPanel/ClassSelectionPanel';

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

  const [scheduleData, setScheduleData] = useState<{ teachers: any[]; disciplines: any[]; programs: any[]; difficulties: any[]; classes: any[]; daysLegend: any[]; }>({
    teachers: [],
    disciplines: [],
    programs: [],
    difficulties: [],
    classes: [],
    daysLegend: []
  });
  const [dynamicData, setDynamicData] = useState<string[]>([]);
  const [selectedDay, selectedDayHandler] = useState(1)
  const [selectedMonth, selectedMonthHandler] = useState(7)
  // new Date().getMonth() + 1
  const [classesForDay, classesForDayHandler] = useState({})

  useEffect(() => {
    // ?? Set month from calendar
    // const month = new Date().getMonth()
    // selectedMonthHandler(month + 1)

    // ^^ Request data for current month
    axios.get(`/api/${selectedMonth}`)
      .then(function (response) {

        // ?? Set State with data
        setScheduleData({
          teachers: response.data.teachers,
          difficulties: response.data.difficulties,
          disciplines: response.data.disciplines,
          programs: response.data.programs,
          classes: response.data.classes,
          daysLegend: response.data.days
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const getClassesByDay = (dayID) => {
    const classesScheduled = [...scheduleData.classes]
    let classesScheduledByDay: {}[] = [];

    // i used a fucking c-loop because typescript hates me
    for (let i = 0; i < classesScheduled.length; i++) {
      if (classesScheduled[i].day_id === dayID) {
        classesScheduledByDay.push(classesScheduled[i])
      }
    }

    console.log(classesScheduledByDay);
    return classesScheduledByDay;
  }

  const handleCalendarDayChange = date => {
    let day: any = ("0" + date.getDate()).slice(-2)
    selectedDayHandler(day * 1 - 1)
    let selectedDayId = scheduleData.daysLegend[day * 1 - 1]
    classesForDayHandler(getClassesByDay(day * 1))

  }

  const handleCalendarMonthChange = date => {

  }

  // let month: any = ("0" + (date.getMonth() + 1)).slice(-2);
  // selectedMonthHandler(month * 1)







  //nb if you click these too quickly after pageload, they don't work...
  const handleTeachersFilter = () => {
    // console.log(scheduleData.teachers[0].name);

    const teachers = scheduleData.teachers.map((t) => t.name)
    teachers.push('Teacher')
    setDynamicData(teachers);
    console.log('hello')
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
    const difficulties = scheduleData.difficulties.map((t) => t.description);
    difficulties.push('Difficulty')
    setDynamicData(difficulties);
  }

  const handleTypeSelection = () => {
    console.log('hello');



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
        <CalendarPanel
          handleCalendarDayChange={handleCalendarDayChange}
          handleCalendarMonthChange={handleCalendarMonthChange}
        />
      </div>

      <div className="Schedule__classSelection">
        <ClassSelectionPanel  
          classesForDay={classesForDay}
        />
      </div>

      <div className="Schedule__dynamicSelection">
        <DynamicDataPanel
          handleTypeSelection={handleTypeSelection}
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
