/* Read Me
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell2.swift | Initially Modified: 06:12 PM Thu 7 Sep 2023
 -> History Entry | iPadOS 17.0 | Swift Playgrounds | Тестовое задание №5 | Cell2.swift |      Last Modified: __:__ PM Thu 7 Sep 2023
 /Views/Shared/Cell2.swift
 Thu 7 Sep 2023
 __:__ PM | `` | (+)
 #
*/

import SwiftUI

internal struct Cell2: View {
    internal let hotel: Hotel

    internal var body: some View { // Initially Modified: _6:16 PM Thu 07 Sep 2023
        VStack(alignment: .leading, spacing: 16.0) {
            about
            nePridumalNazvanie
            description
            oida
        }
    }

    private var about: some View { // Initially Modified: _6:17 PM Thu 07 Sep 2023
        Text("Об отеле")
            .textStyle(NePridumalNazvanieTextStyle1())
    }

    private var nePridumalNazvanie: some View {
        NePridumalNazvanieLayout {
            ForEach(hotel.aboutTheHotel.peculiarities, id: \.self) { label in
                Label(label, systemImage: "square")
                    .labelStyle(
                        Issue1LabelStyle(
                            verbatimOnly: true,
                            foregroundColor: .x828796,
                            backgroundColor: .xfbfbfc
                        )
                    )
                    .padding(.trailing, 8.0)
                    .padding(.bottom, 8.0)
                    .lineLimit(1)
            }
        }
    }

    private var description: some View { // Initially Modified: _6:19 PM Thu 7 Sep 2023
        Text(hotel.aboutTheHotel.description)
            .font(.system(size: 16.0))
            .padding(.top, -4.0)
    }

    private var oida: some View { // Initially Modified: 06:43 PM Fri 8 Sep 2023
        VStack(spacing: 10.0) {
            Cell2Row(verbatim1: "Удобства", verbatim2: "Удобства", imageName: "emoji-happy")
            Cell2Row(verbatim1: "Что включено", verbatim2: "Самое необходимое", imageName: "tick-square")
            Cell2Row(verbatim1: "Что не включено", verbatim2: "Самое необходимое", imageName: "close-square")
        }
        .padding(.all, 15.0)
        .background(.xfbfbfc)
        .cornerRadius(15.0)
    }
}

fileprivate struct Cell2Row: View {
    fileprivate let verbatim1: String // Initially Modified: _6:44 PM Sun 10 Sep 2023
    fileprivate let verbatim2: String // Initially Modified: _6:45 PM Sun 10 Sep 2023
    fileprivate let imageName: String // Initially Modified: _6:46 PM Sun 10 Sep 2023

    fileprivate var body: some View {
        HStack(alignment: .lastTextBaseline, spacing: 12.0) {
            Image(imageName)
                .resizable()
                .frame(width: 24.0, height: 24.0)
            VStack(spacing: 10.0) {
                HStack(spacing: 0.0) {
                    VStack(alignment: .leading) {
                        Text(verbatim1)
                            .font(.system(size: 16.0, weight: .medium))
                            .foregroundColor(.x2c3035)
                        Text("Самое необходимое")
                            .font(.system(size: 14.0, weight: .medium))
                            .foregroundColor(.x828796)
                    }
                    Spacer()
                    Image(systemName: "chevron.right")
                }
                Divider().background(.x828796.opacity(0.15))
            }
        }
    }
}
