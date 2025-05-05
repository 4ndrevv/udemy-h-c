import CoreConcepts from './CoreConcepts/CoreConcepts.jsx';
import { CORE_CONCEPTS } from '../data.js';


export default function CoreConcept() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((concept) => (
                <CoreConcepts key={concept.title} {...concept} />
              ))}
            </ul>
        </section>
    );
}