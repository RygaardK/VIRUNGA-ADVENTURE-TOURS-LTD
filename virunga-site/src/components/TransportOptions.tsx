import { Table } from 'react-bootstrap';
import { FiTruck } from 'react-icons/fi';
import type { TransportOption } from '../data/experiences';

interface TransportOptionsProps {
  options: TransportOption[];
}

const TransportOptions: React.FC<TransportOptionsProps> = ({ options }) => {
  if (!options.length) return null;

  return (
    <div className="transport-options mb-4">
      <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
        <FiTruck className="text-success" />
        Transport Options
      </h5>
      <Table responsive bordered hover className="mb-0 small">
        <thead className="table-success">
          <tr>
            <th>Method</th>
            <th>Price</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr key={index}>
              <td className="fw-medium">{option.method}</td>
              <td className="fw-bold text-success">{option.price}</td>
              <td className="text-muted">{option.note || '—'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransportOptions;
