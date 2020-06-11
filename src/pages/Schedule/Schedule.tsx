import React, { useEffect, useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

// ?? Box Components
import TeacherFilterBox from '../../components/boxes/scheduleBoxes/TeacherFilterBox/TeacherFilterBox'
import DifficultiesFilterBox from '../../components/boxes/scheduleBoxes/DifficultiesFilterBox/DifficultiesFilterBox'
import DisciplinesFilterBox from '../../components/boxes/scheduleBoxes/DisciplinesFilterBox/DisciplinesFilterBox'
import ProgramsFilterBox from '../../components/boxes/scheduleBoxes/ProgramsFilterBox/ProgramsFilterBox'
import ClearFilterBox from '../../components/boxes/scheduleBoxes/ClearFilterBox/ClearFilterBox'

// ?? Panel Components
import CalendarPanel from '../../components/panels/CalendarPanel/CalendarPanel'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import DynamicDataPanel from '../../components/panels/DynamicDataPanel/DynamicDataPanel'
import ClassSelectionPanel from '../../components/panels/ClassSelectionPanel/ClassSelectionPanel.js';
import ScheculePrimaryDataPanel from '../../components/panels/ScheculePrimaryDataPanel/ScheculePrimaryDataPanel'
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

  // ?? Component Props
  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    navState
  } = props;

  // ?? Component State
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
  const [selectedMonth, selectedMonthHandler] = useState(6)
  const [classesForDay, classesForDayHandler] = useState<any[]>([])
  const [filteredClassesForDay, filteredClassesForDayHandler] = useState<any[]>([])
  const [primaryDataPanel, primaryDataPanelHandler] = useState({ title: null, info: null })
  const [secondaryDataPanel, secondaryDataPanelHandler] = useState({ title: null, info: null })
  const [dataLoad, dataLoadHandler] = useState(false)
  const [selectedClass, selectedClassHandler] = useState(-1)
  const [renderOverlay, renderOverlayHandler] = useState(false)

  const getClassesByDay = (dayID, monthNumber) => {
    return [...scheduleData.classes].filter(c => {
      if (c.daynumber === dayID && c.monthnumber === monthNumber) {
        return true;
      }
    })
  }
  useEffect(() => {
    // ?? Set Class Filter to current day
    const getTodayID = () => {
      const today = new Date(Date.now())
      return today.getDate()
    }
    // ?? Set month from calendar
    // ^^ Request data for current month
    axios.get(`/api/${selectedMonth}`)
      .then(function (response) {
        const { classes, teachers, difficulties, disciplines, programs, daysLegend } = response.data
        // ?? Set State with data
        setScheduleData({
          teachers,
          difficulties,
          disciplines,
          programs,
          classes,
          daysLegend
        })
        return response.data
      })
      // !! refactor to useEffect
      .then((data) => {
        const today = getTodayID()
        console.log('before', data.classes);

        const classesToday = data.classes.filter(c => c.daynumber === today && c.monthnumber === selectedMonth
        )
        console.log('classesToday on pageload', classesToday)
        classesForDayHandler(classesToday)
        filteredClassesForDayHandler(classesToday)
        dataLoadHandler(true)
      }
      )
      .catch(function (error) {
        console.log(error);
      })
  }, [selectedMonth])

  const handleCalendarDayChange = date => {
    let day: any = ("0" + date.getDate()).slice(-2)
    selectedDayHandler(day * 1 - 1)
    classesForDayHandler(getClassesByDay(day * 1, selectedMonth))
    console.log('all classes for day:', classesForDay);
    filteredClassesForDayHandler(getClassesByDay(day * 1, selectedMonth))
  }

  const handleCalendarMonthChange = date => {

  }

  //nb if you click these too quickly after pageload, they don't work...
  const handleTeachersFilter = () => {
    const teachers = scheduleData.teachers.map((t) => t)

    setDynamicData(teachers);
  }

  const handleDisciplinesFilter = () => {
    const disciplines = scheduleData.disciplines.map((t) => t.name)
    console.log(disciplines)
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

  const handleTypeSelection = (id: number) => {

    // classesForDayHandler(getClassesByDay(selectedDay))

    const teacher = scheduleData.teachers.filter(el => el.id === id)

    primaryDataPanelHandler({ title: teacher[0].name, info: teacher[0].bio })

    const newClassesForDay = classesForDay.filter(el => el.teacher_id === teacher[0].id)

    filteredClassesForDayHandler(newClassesForDay)

  }

  const clearFilters = () => {
    const classesForDaySelected = getClassesByDay(selectedDay, selectedMonth)
    filteredClassesForDayHandler(classesForDaySelected)
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
        {dataLoad && <ClassSelectionPanel
          renderOverlayHandler={renderOverlayHandler}
          secondaryDataPanelHandler={secondaryDataPanelHandler}
          classesForDay={filteredClassesForDay}
          selectedClassHandler={selectedClassHandler}
        />}
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
        <ClearFilterBox
          clearFilters={clearFilters}
        />
      </div>

      <div className="Schedule__teacherInfo">
        <ScheculePrimaryDataPanel
        key='primary1'
          primaryDataPanel={primaryDataPanel}
        />
      </div>

      <div className="Schedule__classInfo">
        <ScheculePrimaryDataPanel
          key='primary2'
          primaryDataPanel={secondaryDataPanel}
        />
      </div>
    </div>
  )
}

export default Schedule;
