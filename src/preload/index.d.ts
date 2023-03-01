/* eslint-disable @typescript-eslint/no-empty-interface */
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window extends ElectronAPI {}
}
