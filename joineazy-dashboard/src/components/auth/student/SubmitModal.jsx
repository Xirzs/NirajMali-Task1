import { useState } from 'react';

export default function SubmitModal({ assignment, onClose, onConfirm }) {
  const [step, setStep] = useState(1); // 1 = first confirm, 2 = final confirm

  const handleFirstConfirm = () => {
    setStep(2);
  };

  const handleFinalConfirm = () => {
    onConfirm(assignment.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        {step === 1 ? (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Submit Assignment?
            </h3>
            <p className="text-gray-600 mb-2">
              Assignment: <span className="font-semibold">{assignment.title}</span>
            </p>
            <p className="text-gray-600 mb-6">
              Have you submitted your work via the Drive link?
            </p>
            <a
              href={assignment.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm mb-6 block"
            >
              🔗 Open Drive Link
            </a>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleFirstConfirm}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Yes, I've Submitted
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Final Confirmation
            </h3>
            <p className="text-gray-600 mb-6">
              Are you absolutely sure? This will mark the assignment as submitted
              and cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Go Back
              </button>
              <button
                onClick={handleFinalConfirm}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Confirm Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}