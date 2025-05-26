import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { appContainer } from '../src/app'

describe("App Container", () => {
  let appDiv; 
  

  beforeEach(() => {
    appDiv = document.createElement('div');
    appDiv.id = 'app';
    document.body.appendChild(appDiv);
  });

 

  it("should render the main title and names inside the #app element", () => {
    appContainer();

    const app = document.querySelector('#app');

    expect(app).not.toBeNull();

    const h1 = app?.querySelector('h1');

    expect(h1).not.toBeNull(); 

    expect(h1?.textContent).toBe('TDE de Engenharia'); 

    expect(app?.innerHTML).toContain('Pedro Henrique');

    const spans = app?.querySelectorAll('span');

    expect(spans?.length).toBe(6);
  });
});