import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';

export default function AnyComponent() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result, index) => (
          // Check if result is an object or string
          typeof result === 'string' ? (
            <li key={index}>{result}</li>
          ) : (
            <li key={result.timestamp}>{result.transcript}</li>
          )
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}
