import { React, useState } from 'react';
import './MonitoringList.css';
import calenderimg from './calendar-days.svg';
import download from './download.svg';
import downloadindividual from './downloadindividual.svg';
import highshield from './shield-alert-high.svg';
import mediumshield from './shield-alert-medium.svg';
import lowshield from './shield-alert-low.svg';
import tworights from './chevron-2rights.svg';
import right from './chevron-right.svg';
import left from './chevron-left.svg';
import twolefts from './chevrons-2lefts.svg';
import reportImage from './reportImage.jpg'


function MonitoringList() {

    const [selectedEntry, setSelectedEntry] = useState(null);

    const handleRowClick = (entry) => {
        setSelectedEntry(entry);
      };
      

    const list_entries = [
        { id: 230001, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '02', date_of_detection: '07/05/2023' },
        { id: 230002, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '32', date_of_detection: '07/05/2023' },
        { id: 230003, alert_type: 'Traffic Congestion', scale : 'medium', time_of_detection: '12:00:00 AM', camera: '11', date_of_detection: '07/05/2023' },
        { id: 230004, alert_type: 'Traffic Congestion', scale : 'low', time_of_detection: '12:00:00 AM', camera: '19', date_of_detection: '07/05/2023' },
        { id: 230005, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '15', date_of_detection: '07/05/2023' },
        { id: 230006, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '12', date_of_detection: '07/05/2023' },
        { id: 230007, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '09', date_of_detection: '07/05/2023' },
        { id: 230008, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '81', date_of_detection: '07/05/2023' },
        { id: 230012, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '41', date_of_detection: '07/05/2023' },
        { id: 230009, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '32', date_of_detection: '07/05/2023' },
        { id: 240000, alert_type: 'Traffic Congestion', scale : 'high', time_of_detection: '12:00:00 AM', camera: '15', date_of_detection: '07/05/2023' }
      ];
    const getShieldImage = (scale) => {
        switch (scale) {
            case 'high':
                return highshield;
            case 'medium':
                return mediumshield;
            case 'low':
                return lowshield;
            default:
                return '';
        }
    };
    if (selectedEntry) {
        return (
          <div className = 'MonitoringReportDiv'>
          <div className = 'BackButtonAndReportIDAndDownloadButton'>
            <div className = 'BackButtonAndReportID'>
            <img className="ReportBackButton" src={left} onClick={() => setSelectedEntry(null)}/>
            <h2 className= 'ReportID'> {selectedEntry.id}</h2>
            </div>
            <img className="ReportDownloadButton" src={downloadindividual} onClick={() => setSelectedEntry(null)}/>
            </div>
            <div className = 'ReportDetailsAndImage'>
            <img className = 'ReportImage' src={reportImage}/>
            <div className = 'reportDetails'>
                <div className = 'reportDetailsHeader'> Details </div>
                <div className = 'AlertTypeReport'> 
                    <p className = 'LighterColorP'>Alert Type</p>
                    <p className =  'DarkerP'>{selectedEntry.alert_type}</p>
                </div>
                <div className = 'CameraNumberReport'>
                    <p className = 'LighterColorP'>Camera</p>
                    <p className =  'DarkerP'>{selectedEntry.camera}</p>
                </div>
                <div className = 'DateOfDetectionReport'>
                    <p className = 'LighterColorP'>Date of Detection</p>
                    <p className =  'DarkerP'>{selectedEntry.date_of_detection}</p>
                </div>
                <div className = 'TimeOfDetectionReport'>
                    <p className = 'LighterColorP'>Time of Detection</p>
                    <p className =  'DarkerP'>{selectedEntry.time_of_detection}</p>
                </div>
                <div className = 'DurationReport'>
                    <p className = 'LighterColorP'>Duration</p>
                    <p className =  'DarkerP'>00.22.32</p>
                </div>
                <div className = 'LocationReport'>
                    <p className = 'LighterColorP'>Location</p>
                    <p className =  'DarkerP'>Dixie & Dundas</p>
                </div>
                <div className = 'Scale'>
                    <p className = 'LighterColorP'>Scale</p>
                    <p className =  'DarkerP'>
                    <img src={getShieldImage(selectedEntry.scale)} alt={`${selectedEntry.scale} shield`} style={{ backgroundColor: '#151517', marginRight: '0.5rem' }} />
                    {selectedEntry.scale}
                    </p>
                </div>
            </div>
            </div>
            <hr className = 'horizontalLine' />
          </div>
        );
      }

    return (
        <div className='EntireMonitoringDiv'>
            <p className='DatepMonitoringList'>
            <img className="CalenderImageMonitoringList" src={calenderimg} alt="calendar" /> June 30th, 2023- August 30th, 2023
            </p>
            <button className='DownloadButtonMonitoringList'>
            <img className="DownloadImageMonitoringList" src={download} alt="download" /> Download Selected
            </button>

            <div className='MonitoringListTableDiv'>
            <table className='MonitoringListTable'>
                <thead>
                <tr>
                    <th><input type="checkbox" className=""/>ID</th>
                    <th>Alert Type</th>
                    <th>Scale</th>
                    <th>Time of Detection</th>
                    <th>Camera</th>
                    <th>Date of Detection</th>
                    </tr>
                </thead>
                <tbody>
                {list_entries.map(entry => (
                    <tr className = 'entries' key={entry.id} onClick={() => handleRowClick(entry)}>
                    <td><input type="checkbox" className=""/>{entry.id}</td>
                    <td>{entry.alert_type}</td>
                    <td>
                        <img src={getShieldImage(entry.scale)} alt={`${entry.scale} shield`} style={{ backgroundColor: '#151517', marginRight: '0.5rem' }} />
                        {entry.scale}
                    </td>
                    <td>{entry.time_of_detection}</td>
                    <td>{entry.camera}</td>
                    <td>{entry.date_of_detection}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <div className= 'RowsAndPageNumber'>
                <p className='rowsSelected'>0 rows selected</p>
                <div className='PageNumberAndIcons'>
                <h5 className='PageNumber'>Page 1 of 10</h5>
                    <img className="twolefts" src={twolefts}/> 
                    <img className="left" src={left}/>
                    <img className="right" src={right}/>  
                    <img className="tworights" src={tworights}/>
                </div>
            </div>
        </div>
    );
}

export default MonitoringList;

