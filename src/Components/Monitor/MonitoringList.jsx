import { React, useState } from 'react';
import './MonitoringList.css';
import calenderimg from './calendar-days.svg';
import download from './download.svg';
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
            <div className = 'BackButtonAndReportID'>
            <img className="ReportBackButton" src={left} onClick={() => setSelectedEntry(null)}/>
            <h1> {selectedEntry.id}</h1>
            </div>
            <div className = 'ReportDetailsAndImage'>
            <img className = 'ReportImage' src={reportImage}/>
            <div className = 'reportDetails'>
                <div className = 'reportDetailsHeader'> Details </div>
                <div className = 'AlertTypeReport'> 
                    <p>Alert Type</p>
                    <p>{selectedEntry.alert_type}</p>
                </div>
                <div className = 'CameraNumberReport'>
                    <p>Camera</p>
                    <p>{selectedEntry.camera}</p>
                </div>
                <div className = 'DateOfDetectionReport'>
                    <p>Date of Detection</p>
                    <p>{selectedEntry.date_of_detection}</p>
                </div>
                <div className = 'TimeOfDetectionReport'>
                    <p>Time of Detection</p>
                    <p>{selectedEntry.time_of_detection}</p>
                </div>
                <div className = 'DurationReport'>
                    <p>Duration</p>
                    <p>00.22.32</p>
                </div>
                <div className = 'LocationReport'>
                    <p>Location</p>
                    <p>Dixie & Dundas</p>
                </div>
                <div className = 'Scale'>
                    <p>Scale</p>
                    <p>
                    <img src={getShieldImage(selectedEntry.scale)} alt={`${selectedEntry.scale} shield`} style={{ backgroundColor: '#151517', marginRight: '0.5rem' }} />
                    {selectedEntry.scale}
                    </p>
                </div>
            </div>
            </div>
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

