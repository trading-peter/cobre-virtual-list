import { customElement } from 'lit-element';
import { VirtualListBase } from './cobre-virtual-list-base';

declare global {
  interface HTMLElementTagNameMap {
    'cobre-virtual-list': VirtualList;
  }
}

@customElement('cobre-virtual-list')
export class VirtualList extends VirtualListBase {}
