/* Read Me
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RootView+Extension.swift | Initially Modified: 09:17 PM Mon 11 Sep 2023
   -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | RootView+Extension.swift |      Last Modified: 09:18 PM Mon 11 Sep 2023
   /Views/RootView+Extension.swift
 
 Swift
 - class
 
 Swift Playgrounds
 - file
 - folder
 
 Sat 9 Sep 2023
 __:__ PM | `` | (+)
 #
*/

internal extension RootView {
    internal enum PresentedView: Hashable {
        case hotel
        case room
        case booking(UInt)
        case paidOrder
    }
}
